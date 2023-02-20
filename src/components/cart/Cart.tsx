import { AnimatePresence, motion } from 'framer-motion'
import { useCartStore } from '../../stores/useCartStore'
import CartItem from '../cart-item/CartItem'
import styles from './index.module.scss'

interface Props {
    active: boolean,
}

const Cart : React.FC<Props> = ({ active }) => {
    const cart = useCartStore((state) => state.products)

    return (
        <AnimatePresence>
            { active && (
                <motion.div 
                    className={styles.cart}
                    initial={{y: -50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    exit={{y: -50, opacity: 0}}
                >
                    <div className={styles.header}>
                        <span>Cart</span>
                        <div className={styles.cart_items}>
                        { cart.length && <span>{`${cart.length}`}</span>}
                            <span>Item(s)</span>
                        </div>
                    </div>
                    { cart.length > 0
                        ? cart.map(product => {
                            return (
                                <CartItem item={product}/>
                            )
                        })
                        : <div className={styles.content}>
                            <span>Your cart is empty.</span>
                        </div>
                    }
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Cart