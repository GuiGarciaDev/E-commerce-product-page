import styles from './index.module.scss'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from '../modal/Modal'
import { createPortal } from 'react-dom'
import useProductModal from '../../hooks/useProductModal'
import Carousel from '../carousel/Carousel'

interface ItemPreviewProps {
    imageObj: image[]
}

interface image {
    src: string
}

const itemVariants = {
    closed: { opacity: 0, y: 40, },
    open: {
        opacity: 1,
        y: 0,
    }
}

const mainVariants = {
    closed: {},
    open: {
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.1,
        }
    }
}

export default function ItemPreview({ imageObj } : ItemPreviewProps) {
    const [currrentIndex, setCurrrentIndex] = useState<number>(0);
    const { productModal, openModal, closeModal } = useProductModal()

    return (
        <div className={styles.main}>
            <motion.button 
                className={styles.mainImage}
                initial={{x: -100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: .5}}
                onClick={() => openModal()}
            >
                <img src={imageObj[currrentIndex].src} alt='item-image'/>
            </motion.button>
            <motion.div className={styles.otherImages} variants={mainVariants} initial={'closed'} animate={'open'}>
                { imageObj.map((img, idx) => {
                    return (
                        <motion.button 
                            key={img.src}
                            onClick={() => setCurrrentIndex(idx)}
                            variants={itemVariants}
                            style={idx === currrentIndex
                                ? {
                                    border: '2px solid var(--orange)'
                                } 
                                : {}
                            }
                        >
                            <img 
                                src={img.src} alt='sneaker'
                                style={idx === currrentIndex
                                    ? {
                                        filter: ' opacity(0.4)',
                                    } 
                                    : {}
                                }
                            />
                        </motion.button>
                    )
                })}
            </motion.div>

            { 
                createPortal(
                    <Modal isOpen={productModal} close={closeModal}>
                        <Carousel images={imageObj} currentIndex={currrentIndex}/>
                    </Modal>, document.body
                )
            }
        </div>
    )
}