import styles from './index.module.scss'

interface PriceProps {
    sellPrice: string,
    totalPrice: string,
    discount: string
}

export default function Price({sellPrice, discount, totalPrice} : PriceProps) {
    return (
        <div className={styles.main}>
            <div className={styles.row}>
                <h2>$125.00</h2>
                <span>50%</span>
            </div>
            <span className={styles.discount}>$250.00</span>
        </div>
    )
}