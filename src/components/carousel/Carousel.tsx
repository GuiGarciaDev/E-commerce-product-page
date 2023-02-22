import styles from "./styles.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useState } from "react";

interface CarouselProps {
  type: "modal" | "streched",
  images: image[];
  currentIndex?: number;
}

interface image {
  src: string;
}

interface currentImage {
  src: string;
  index: number;
}

export default function Carousel({ images, currentIndex, type }: CarouselProps) {
  const [index, setIndex] = useState<number | undefined>(currentIndex);

  // Implement current image
  function nextIndex() {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index! + 1);
    }
  }

  function prevIndex() {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index! - 1);
    }
  }

  return (
    <AnimatePresence mode="wait">
      <div className={type === "modal" ? styles.carousel_modal : styles.carousel_streched}>
        <motion.button
          className={styles.prev}
          onClick={() => prevIndex()}
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{delay: .3}}
        >
          <AiOutlineLeft fontSize={20} />
        </motion.button>
        <motion.button
          className={styles.next}
          onClick={() => nextIndex()}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{delay: .3}}
        >
          <AiOutlineRight fontSize={20} />
        </motion.button>
        <motion.img
          src={index ? images[index].src : images[0].src}
          alt="Product image"
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </div>
    </AnimatePresence>
  );
}
