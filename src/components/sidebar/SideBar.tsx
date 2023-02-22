import styles from "./styles.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

interface SideBarProps {
  isOpen: boolean;
  close: () => void;
}

export default function SideBar({ isOpen, close }: SideBarProps) {
  return (
    <AnimatePresence>
      { isOpen && (
        <motion.div className={styles.sidebar} initial={{width: 0}} animate={{width: '300px'}} exit={{width: 0}}>
          <div className={styles.sidebar_contents}>
            <button onClick={close}>
                <AiOutlineClose fontSize={25} />
              </button>
              <ul>
                  <li>Collections</li>
                  <li>Men</li>
                  <li>Woman</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
          </div>
           
        </motion.div> 
      )}
    </AnimatePresence>
  )
}
