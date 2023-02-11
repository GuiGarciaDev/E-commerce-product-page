import styles from './index.module.scss'

interface Props {
    active: boolean
}

export default function Cart({ active } : Props) {
    return (
        <div className={styles.cart} style={active ? {display: 'flex'} : {display: 'none'}}>
            <div className={styles.header}>
                Cart
            </div>
            <div className={styles.content}>
                <span>Your cart is empty.</span>
            </div>
        </div>
    )
}