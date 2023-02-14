import { useState } from 'react'
import Header from './components/header/Header'
import ItemPreview from './components/item-preview/ItemPreview'
import Price from './components/price/Price'
import styles from './styles/App.module.scss'
import { BsCart3 } from 'react-icons/bs'
import { BiPlusMedical } from 'react-icons/bi'
import { FaMinus } from 'react-icons/fa'
import { product } from '../db.json'

function App() {
  const [quantity, setQuantity] = useState<number>(0);
  
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <Header />

        <div className={styles.content}>
          <div className={styles.left}>
            <ItemPreview imageObj={product.images}/>
          </div>

          <div className={styles.right}>
            <span className={styles.company}>Sneaker Company</span>
            <h1>Fall Limited Edition Sneakers</h1>
            <span className={styles.description}>
              These low profile sneakers are your perfect casual wear
              companio. Featuring a durable rubber outer sole, they'll
              whithstand everything the weather can offer.
            </span>
            
            <Price sellPrice='125.00' discount='50%' totalPrice='250.00'/>

            <div className={styles.buy}>
              <div className={styles.itemQuantity}>
                <button onClick={() => setQuantity(prev => prev - 1)}>
                  <FaMinus fontSize={14}/>
                </button>
                <button className={styles.quantity}> {quantity} </button>
                <button onClick={() => setQuantity(prev => prev + 1)}>
                  <BiPlusMedical fontSize={14}/>
                </button>
              </div>

              <button className={styles.addButton}>
                <BsCart3 fontSize={18}/>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
