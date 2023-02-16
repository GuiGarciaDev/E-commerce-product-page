import styles from './index.module.scss'
import { BsFillTrashFill } from 'react-icons/bs'
import { useCartStore } from '../../stores/useCartStore'

interface CartItemsProps {
    item: product
}

interface product {
    name: string,
    id: string,
    img: string,
    quantity: number,
    price: string
}

export default function CartItem({ item } : CartItemsProps) {
    const removeProduct = useCartStore((state) => state.removeProduct)

    return (
        <div className={styles.main}>
            <img src={item.img} alt=''/>
            <div className={styles.settings}>
                <span className={styles.name}>
                    {item.name}
                </span>
                <div className={styles.price}>
                    <span>{`$${item.price} x ${item.quantity}`}</span>
                    <span className={styles.total}>{`$${(+item.price*item.quantity).toFixed(2)}`}</span>
                </div>
            </div>
            <button onClick={() => removeProduct(item.id)}>
                <BsFillTrashFill fontSize={16}/>
            </button>
        </div>
    )
}