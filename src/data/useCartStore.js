import {create} from 'zustand';

const createSelectors = (_store) => {
    let store = _store;
    store.use = {};
    for (let k of Object.keys(store.getState())) {
        ;
        store.use[k] = () => store((s) => s[k]);
    }
    return store;
};

const useCartStore = createSelectors(create((set) => ({
    cartItems: [],

    addToCart: (product) => set((state) => {
        const existingProduct = state.cartItems.find(item => item.id === product.id);

        if (existingProduct) {
            return {
                cartItems: state.cartItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        } else {
            return {
                cartItems: [...state.cartItems, { ...product, quantity: 1 }]
            };
        }
    }),

    removeFromCart: (productId) => set((state) => ({
        cartItems: state.cartItems.filter(item => item.id !== productId)
    })),

    resetCart: () => set({ cartItems: [] }),

    updateQuantity: (productId, quantity) => set((state) => ({
        cartItems: state.cartItems.map(item =>
            item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
        )
    })),

    incrementQuantity: (productId) => set((state) => ({
        cartItems: state.cartItems.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        )
    })),

    decrementQuantity: (productId) => set((state) => ({
        cartItems: state.cartItems.map(item =>
            item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
        )
    })),
})));

export default useCartStore;
