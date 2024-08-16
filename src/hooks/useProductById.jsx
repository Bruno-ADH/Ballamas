import { useCallback } from 'react';
import useCartStore from '../data/useCartStore';
import useCollectionStore from '../data/CollectionStore';

const useProductById = (productId) => {
    const products = useCollectionStore.use.collections();
    const getProductById = useCallback(() => {
        const id = parseInt(productId, 10);
        return products.find(item => item.id === id);
    }, [products, productId]);

    console.log('getProductById :>> ', getProductById);

    return getProductById();
};

export default useProductById;
