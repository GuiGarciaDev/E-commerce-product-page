import styles from './index.module.scss'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsCart3 } from 'react-icons/bs'
import Cart from '../cart/Cart'
import { useState } from 'react';
import CartItem from '../cart-item/CartItem';
import { useCartStore } from '../../stores/useCartStore';

export default function Header() {
    const [cart, setCart] = useState<boolean>(false);
    const cartSize = useCartStore((state) => state.products)

    return (
        <div className={styles.header}>
            <div className={styles.start}>
                <button className={styles.toggleMenu}>
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
                        { cartSize.length > 0 && <span>{cartSize.length}</span>}
                    </button>

                    <Cart active={cart} />
                </div>

                <img className={styles.profilePhoto} src={'/src/assets/react.svg'} />
            </div>
        </div>
    )
}