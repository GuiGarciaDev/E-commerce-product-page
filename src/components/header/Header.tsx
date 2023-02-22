import styles from './index.module.scss'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsCart3 } from 'react-icons/bs'
import Cart from '../cart/Cart'
import { useState } from 'react';
import { useCartStore } from '../../stores/useCartStore';
import { AnimatePresence, motion } from 'framer-motion';
import { useSideBar } from '../../hooks/useSideBar';

interface HeaderProps {
    openSideBar: () => void
}

export default function Header({ openSideBar } : HeaderProps) {
    const [cart, setCart] = useState<boolean>(false)
    const cartSize = useCartStore((state) => state.products)
    
    return (
        <header className={styles.header}>
            <div className={styles.start}>
                <button className={styles.toggleMenu} onClick={openSideBar}>
                    <AiOutlineMenu fontSize={25} />
                </button>
                
                <img className={styles.logo} src={'/src/assets/logo.svg'} />
                <div className={styles.headerButtons}>
                    <button>Collections<span/></button>
                    <button>Men<span/></button>
                    <button>Woman<span/></button>
                    <button>About<span/></button>
                    <button>Contact<span/></button>
                </div>  
            </div>
            
            <div className={styles.end}>
                <div className={styles.cartHolder}>
                    <button onClick={() => setCart(prev => !prev)}>
                        <BsCart3 fontSize={20} />
                        <AnimatePresence>
                            { cartSize.length > 0 && (
                                <motion.span
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                >
                                    {cartSize.length}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>

                    <Cart active={cart} />
                </div>

                <img className={styles.profilePhoto} src={'/src/assets/react.svg'} />
            </div>
        </header>
    )
}