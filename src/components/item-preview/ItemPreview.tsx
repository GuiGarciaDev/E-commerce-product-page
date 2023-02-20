import styles from './index.module.scss'
import { useState } from 'react'
import { motion } from 'framer-motion'

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
    const [currentImage, setCurrentImage] = useState<string>(imageObj[0].src);

    return (
        <div className={styles.main}>
            <motion.div 
                className={styles.mainImage}
                initial={{x: -100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: .5}}
            >
                <img src={currentImage} alt='item-image'/>
                <div className={styles.OBJETO}></div>
            </motion.div>
            <motion.div className={styles.otherImages} variants={mainVariants} initial={'closed'} animate={'open'}>
                { imageObj.map(img => {
                    return (
                        <motion.button 
                            key={img.src}
                            onClick={() => setCurrentImage(img.src)}
                            variants={itemVariants}
                            style={img.src === currentImage 
                                ? {
                                    border: '2px solid var(--orange)'
                                } 
                                : {}
                            }
                        >
                            <img 
                                src={img.src} alt='sneaker'
                                style={img.src === currentImage 
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
        </div>
    )
}