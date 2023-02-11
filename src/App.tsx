import { useState } from 'react'
import Header from './components/header/Header'
import styles from './styles/App.module.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <Header />
      </div>
    </div>
  )
}

export default App
