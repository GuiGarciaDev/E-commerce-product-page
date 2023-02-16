import { create } from 'zustand'

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
    // addProduct: (product: product) => {
    //     set(state => {
    //         if ()
    //     })
    //     //set((state) => ({ products: [...state.products, product] }), true)
    // },
    getProduct: (id: string) => {
       return get().products.filter(product => { return product.id === id })
    },
    addProduct: (product: product) => {
        console.log(get().products.filter(product => { return product.id === product.id }));
        
        if (get().getProduct(product.id).length > 0) { 
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
            // let index = get().products.filter(el => { return el.id === product.id})
            // console.log(index)
            set((state) => ({ products: [...state.products, product] }))
        } 
      },
    removeProduct: (id: string) => set((state) => ({ products: state.products.filter(product => {return product.id !== id})}))
}))