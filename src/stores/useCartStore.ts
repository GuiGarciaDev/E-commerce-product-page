import { create } from 'zustand'
import { toastEmitterWarning } from '../utils/toastfyemitter'

interface CartState {
    products: product[],
    addProduct: (product: product) => void
    removeProduct: (id: string) => void
    getProduct: (id: string) => product[]
}

interface product {
    name: string,
    id: string,
    img: string,
    quantity: number,
    price: string
}

export const useCartStore = create<CartState>((set, get) => ({
    products: [],
    getProduct: (id: string) => {
       return get().products.filter(product => { return product.id === id })
    },
    addProduct: (product: product) => {   
        if (product.quantity > 0) { // Only add if the quantity of product is greater than 0
            if (get().getProduct(product.id).length > 0) { // Verify if the cart have the same product
                const oldQuantity = get().getProduct(product.id)[0].quantity
                get().removeProduct(product.id)
                set((state) => ({ products: [
                    ...state.products, // Keep previous products, if this app have other types of that
                    {  // Set them same product with other quantity
                        name: product.name, 
                        id: product.id, 
                        img: product.img, 
                        quantity: oldQuantity + product.quantity, 
                        price: product.price
                    }
                ]})) 
            } else {
                set((state) => ({ products: [...state.products, product] }))
            } 
        } else { toastEmitterWarning(`Quantity equal to zero`) }
      },
    removeProduct: (id: string) => set((state) => ({ products: state.products.filter(product => {return product.id !== id})}))
}))