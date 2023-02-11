import styles from './index.module.scss'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsCart3 } from 'react-icons/bs'
import Cart from '../cart/Cart'
import { useState } from 'react';

export default function Header() {
    const [cart, setCart] = useState<boolean>(false);

    return (
        <div className={styles.header}>
            <div className={styles.start}>
                <button className={styles.toggleMenu}>
                    <AiOutlineMenu fontSize={25} />
                </button>
                
                <img className={styles.logo} src={'/src/assets/logo.svg'} />
                <div className={styles.headerButtons}>
                    <button>Collections</button>
                    <button>Men</button>
                    <button>Woman</button>
                    <button>About</button>
                    <button>Contact</button>
                </div>  
            </div>
            
            <div className={styles.end}>
                <div className={styles.cartHolder}>
                    <button onClick={() => setCart(prev => !prev)}>
                        <BsCart3 fontSize={20} />
                    </button>

                    <Cart active={cart}/>
                </div>

                <img className={styles.profilePhoto} src={'/src/assets/react.svg'} />
            </div>
        </div>
    )
}