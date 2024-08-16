import { useMemo } from 'react';
import useCollectionStore from '../data/CollectionStore';

const useRelatedProducts = (productId) => {
  const collection = useCollectionStore.use.collections();

  const relatedProducts = useMemo(() => {
    const id = parseInt(productId, 10);
    const product = collection?.find(item => item.id === id);

    if (!product) return [];

    return collection.filter(
      item => item.category === product.category && item.type === product.type && item.id !== product.id
    );
  }, [collection, productId]);

  return relatedProducts;
};

export default useRelatedProducts;
