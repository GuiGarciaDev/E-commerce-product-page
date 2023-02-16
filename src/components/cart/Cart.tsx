import { useCartStore } from '../../stores/useCartStore'
import CartItem from '../cart-item/CartItem'
import styles from './index.module.scss'

interface Props {
    active: boolean,
}

const Cart : React.FC<Props> = ({ active }) => {
    const cart = useCartStore((state) => state.products)

    return (
        <div className={styles.cart} style={active ? {display: 'flex'} : {display: 'none'}}>
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
            
        </div>
    )
}

export default Cart