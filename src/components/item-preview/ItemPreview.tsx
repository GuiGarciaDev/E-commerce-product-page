import styles from './index.module.scss'
import { useState } from 'react'

interface ItemPreviewProps {
    imageObj: image[]
}

interface image {
    src: string
}

export default function ItemPreview({ imageObj } : ItemPreviewProps) {
    const [currentImage, setCurrentImage] = useState<string>(imageObj[0].src);

    return (
        <div className={styles.main}>
            <div className={styles.mainImage}>
                <img src={currentImage} alt='item-image'/>
                <div className={styles.OBJETO}></div>
            </div>
            <div className={styles.otherImages}>
                { imageObj.map(img => {
                    return (
                        <button 
                            key={img.src}
                            onClick={() => setCurrentImage(img.src)}
                            style={img.src === currentImage 
                                ? {
                                    border: '2px solid var(--orange)'
                                } 
                                : {}
                            }
                        >
                            <img 
                                src={img.src} alt='sneaker'
                                style={img.src === currentImage 
                                    ? {
                                        filter: ' opacity(0.4)',
                                    } 
                                    : {}
                                }
                            />
                        </button>
                    )
                })}
            </div>
        </div>
    )
}