import { useState } from 'react'

export default function useProductModal() {
    const [productModal, setProductModal] = useState<boolean>(false)

    const openModal = () => setProductModal(true)
    const closeModal = () => setProductModal(false)

    return { productModal, openModal, closeModal }
}