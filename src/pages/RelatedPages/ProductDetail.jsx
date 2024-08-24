import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import '../../style/productDetail.css';
import { Container, Row, Col, Button, Form, Carousel, Card } from 'react-bootstrap';
import useProductById from '../../hooks/useProductById';
import useRelatedProducts from '../../hooks/useRelatedProducts'
import CustomCarousel from '../../components/CustomCaroussel';
import useCartStore from '../../data/useCartStore';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


const ProductDetail = () => {
  const { id } = useParams();
  const product = useProductById(id);
  const relatedProducts = useRelatedProducts(id)
  const [selectedColor, setSelectedColor] = useState('normal');
  const [selectedSize, setSelectedSize] = useState('m');
  const variantsColor = {
    green: 'filterGreen',
    purple: 'filterPurple',
    ocean: 'filterOcean',
    olive: 'filterOlive',
    normal: 'filterNormal'
  };

  const variantsSize = {
    xs: 'scale-xs',
    s: 'scale-s',
    m: 'scale-m',
    l: 'scale-l',
    xl: 'scale-xl'
  };

  const addToCart = useCartStore.use.addToCart();
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/cart`);
  };

  
  return (
    <Container className='mt-5 px-3 detail-page'>
      <Row className="my-5 pt-4">
        <Col md={6} className='text-center'>
          <AnimatePresence>
            <div className=' bg-light-gray rounded-5 img-wrapper h-100 text-center'>

              <motion.div
                key={selectedColor + selectedSize}
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '-100%' }}
                transition={{ type: "spring" }}
                className=' h-100 d-flex justify-content-center pb-5 pt-0 pt-md-3 pb-md-0 d-md-block'
              >
                <img
                  loading='lazy'
                  src={`/${product.image}`}
                  alt={product.title}
                  className={`img-fluid ${variantsColor[selectedColor]} ${variantsSize[selectedSize]}`}
                />
              </motion.div>

            </div>
          </AnimatePresence>
        </Col>
        <Col md={6}>
          <h1 className="fm-Chillax-Semibold">{product?.title}</h1>
          <h4 className="fm-archivo-semibold mt-3">CAD ${product?.price}</h4>
          <div className="mt-3 pb-1 fm-archivo-Medium div-color-wrapper">
            <span className='text-capitalize color-title'>Color: {selectedColor}</span>
            <div className="d-flex align-items-center mt-2 div-color gap-3">
              {Object.keys(variantsColor).map((color) => (
                <span
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Select ${color} color`}
                  className={`border bg-${color} ${selectedColor === color ? 'border-gray border-2' : 'border-transparent'}`}
                />
              ))}
            </div>
          </div>

          <div className="my-2 fm-archivo-Medium size-div-wrapper">
            <span>Size: <span className='text-uppercase'>{selectedSize}</span></span>
            <div className="d-flex mt-2 size-div">
              {Object.keys(variantsSize).map((size) => (
                <Button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  variant="outline-dark"
                  aria-label={`Select size ${size}`}
                  className={`me-2 fs-5 rounded-pill text-uppercase ${selectedSize === size ? 'btn-black hover-dark' : 'bg-transparent border-black text-black hover-dark'}`}
                >{size}</Button>
              ))}
            </div>
          </div>

          <div className="my-4 buy-div d-flex gap-2">
            <motion.div
              className='h-auto m-0 p-0 w-auto'
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="dark" className="bg-black text-white me-2 fm-archivo-semibold rounded-pill w-100"
                onClick={() => {
                  addToCart({ ...product, color: selectedColor, size: selectedSize })
                  handleProductClick()
                }}
              >BUY NOW</Button>
            </motion.div>
            <motion.div
              className='h-auto m-0 w-auto p-0'
              whileTap={{ scale: 0.95 }}
            >
              <Button className='fm-archivo-semibold rounded-pill border-black text-black hover-dark bg-transparent w-100'
                onClick={() => addToCart({ ...product, color: selectedColor, size: selectedSize })}
              >ADD TO CART</Button></motion.div>
          </div>

          <motion.div
            className="mt-5 description-div"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}

          >
            <h3 className='fm-Chillax-Semibold text-black mb-2'>Description</h3>
            <p className='fm-archivo text-dark-gray'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              Class aptent taciti sociosqu ad litora torquent per conubia nostra,
              per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
            </p>
          </motion.div>
        </Col>
      </Row>

      <h4 className='fm-Chillax-Semibold related-title'>You may also like</h4>
      <Row className="my-4 overflow-x-hidden div-caroussel">
        <CustomCarousel collections={relatedProducts} />
      </Row>
    </Container>
  );
}

export default ProductDetail;
