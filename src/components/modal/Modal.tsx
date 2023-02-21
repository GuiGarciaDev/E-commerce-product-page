import styles from './styles.module.scss'
import { AnimatePresence, motion } from "framer-motion"
import { AiOutlineClose } from 'react-icons/ai'

interface ModalProps {
    isOpen: boolean,
    close: () => void,
    children?: JSX.Element
}

const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
};

export default function Modal({ isOpen, children, close } : ModalProps) {
    return (
        <AnimatePresence>
            { isOpen && (
                <motion.div 
                    className={styles.modal_backdrop} 
                    onClick={close}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div 
                        className={styles.modal_content} 
                        onClick={(e) => e.stopPropagation()}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropIn}
                    >
                        <button className={styles.close} onClick={close}>
                            <AiOutlineClose fontSize={25}/>
                        </button>
                        { children }
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}