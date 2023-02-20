import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import ItemPreview from './components/item-preview/ItemPreview'
import Price from './components/price/Price'
import styles from './styles/App.module.scss'
import { BsCart3 } from 'react-icons/bs'
import { BiPlusMedical } from 'react-icons/bi'
import { FaMinus } from 'react-icons/fa'
import { product } from '../db.json'
import { useCartStore } from './stores/useCartStore'
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  const [quantity, setQuantity] = useState<number>(0);
  const addProduct = useCartStore((state) => state.addProduct)

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
                <AnimatePresence mode='wait' initial={false}>
                  <motion.div 
                    className={styles.quantity}
                    key={quantity}
                    initial={{x: -100}}
                    animate={{x: 0}}
                    exit={{x: 100}}
                    transition={{duration: .15}} 
                  > 
                    {quantity} 
                  </motion.div>
                </AnimatePresence>
                <button onClick={() => setQuantity(prev => prev + 1)}>
                  <BiPlusMedical fontSize={14}/>
                </button>
              </div>

              <motion.button className={styles.addButton} 
                initial={{scale: 0.5}}
                animate={{scale: [0.5, 1.1, 1]}}
                transition={{duration: 0.5, ease: 'easeInOut'}}
                onClick={() => {
                  addProduct({
                    name: product.name,
                    id: product.id,
                    img: product.main_image, 
                    price: product.price,
                    quantity: quantity
                  })
                }}>
                <BsCart3 fontSize={18}/>
                Add to cart
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
