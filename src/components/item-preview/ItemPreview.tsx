import styles from './index.module.scss'

export default function ItemPreview() {
    return (
        <div className={styles.main}>
            <div className={styles.mainImage}>
                {/* <img src='' alt='item-image'/> */}
                <div className={styles.OBJETO}></div>
            </div>
            <div className={styles.otherImages}>
                <div className={styles.OBJ}></div>
                <div className={styles.OBJ}></div>
                <div className={styles.OBJ}></div>
                <div className={styles.OBJ}></div>
            </div>
        </div>
    )
}