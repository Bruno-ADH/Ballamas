import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import useCollectionStore from '../../data/CollectionStore';
import '../../style/collectionsSection.css';
import FadeInSection from '../../components/FadeInSection';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../data/useCartStore';

const categories = [
  { name: 'all', label: 'All' },
  { name: 'accessories', label: 'Accessories' },
  { name: 'featured', label: 'Featured' },
  { name: 'unisex', label: 'Unisex'},
];

const CollectionsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const allCollections = useCollectionStore.use.collections()
  const addToCart = useCartStore.use.addToCart();

  const productCounts = allCollections?.reduce((acc, collection) => {
    const category = collection.category.toLowerCase();
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category]++;
    return acc;
  }, {});

  productCounts['all'] = allCollections.length;

  const filteredCollections = allCollections?.filter(collection =>
    selectedCategory === 'all' || collection.category.toUpperCase() === selectedCategory.toUpperCase()
  );

  const visibleCollections = showAll ? filteredCollections : filteredCollections.slice(0, 6);

  const navigate = useNavigate();

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

  return (
    <FadeInSection
      id="collections"
      className="my-5">
      <Container className='px-lg-5'>
        <Row className="justify-content-center align-items-center">
          <Col md="auto justify-content-center align-items-center">
          <p className="text-center fm-Chillax-Semibold title lh-sm">Discover the latest trends in summer fashion. Shop now and refresh your wardrobe with our stylish summer shirts.</p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5 mb-4">
          {categories.map(category => (
            <Col key={category.name} md="auto" className="mb-2 rounded-5" >
              <Button
                variant={selectedCategory === category.name ? 'dark bg-black text-white' : 'outline-dark  border-black text-black hover-dark'}
                className="fs-5 fm-archivo-Medium rounded-pill selectedBtn"
                onClick={() => {
                  setSelectedCategory(category.name);
                  setShowAll(false);
                }}
              >
                {category.label} {productCounts[category.name] || 0}
              </Button>
            </Col>
          ))}
        </Row>
        <Row className="px-lg-3 pt-3 gutter">
          <AnimatePresence mode='popLayout'>
            {visibleCollections.map(collection => (
              <Col key={collection.id} lg={4} sm={6} xs={12} className="mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="collection-card border-0">
                    <div
                      className='wrapper'
                    >
                      <Card.Img
                        as={motion.img}
                        loading='lazy'
                        variant="top"
                        src={collection.image}
                        alt={collection.title}
                        className="img-fluid bg-light-gray"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      />
                      <div className="wrapper-content">
                        <div className='pt-3 ps-3'>
                        {collection?.promo && (<a href="#" className="btn btn-lg active p-0 py-2 bg-white border-0 fm-archivo-semibold rounded-pill text-black" role="button" aria-pressed="true">
                          GET OFF {collection.discount}%
                        </a>)                    }
                        </div>
                        <div className='pb-3 px-3 d-flex justify-content-between gap-1'>
                            <button type="button" className="btn text-black bg-white fm-archivo-semibold w-50 rounded-pill p-0" onClick={() => addToCart({...collection, color: 'normal', size: "m"})}><span></span>ADD TO CART</button>
                            <button type="button" className="btn border-white text-white fm-archivo-semibold w-50 rounded-pill hover-white p-0 pd-more" onClick={()=> handleProductClick(collection.id)}>BUY NOW</button>                           
                        </div>
                      </div>
                    </div>
                    <Card.Body className="p-0 mt-3">
                      {/* <Row className='w-100 m-0 justify-content-between align-items-center my-3'> */}
                        <Card.Title className="fs-3 fm-archivo-semibold m-0 mb-1 text-black text-uppercase" 
                           onClick={()=> handleProductClick(collection.id)}
                        >{collection.title}</Card.Title>
                        {/* <img loading="lazy" src="src/assets/icons/ethereum-ellipse.svg" className="img-fluid m-0 p-0 ms-auto" alt="Logo" style={{ width: '24px', height: '24px' }} /> */}
                        <Card.Text className='fm-archivo-semibold fs-4 p-0 text-dark-gray'>${collection.price}</Card.Text>
                      {/* </Row> */}
                      {/* <Button variant="outline-dark border-neutral-800 rounded-3 w-100 fw-semibold">Place a Bid</Button> */}
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </AnimatePresence>
        </Row>
        <Row className="text-center">
        <Col>
            <Button variant="light" className="text-black bg-transparent rounded-pill hover-dark fw-bold text-center border-black fm-archivo-semibold pd-more" 
            onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show less' : 'View more'}
            </Button>
          </Col>
        </Row>
      </Container>
    </FadeInSection>
  );
};

export default CollectionsSection;