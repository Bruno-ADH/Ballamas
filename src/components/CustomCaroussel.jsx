import React, { useRef, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import '../style/carousel.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useCartStore from '../data/useCartStore';

const CustomCarousel = ({ collections = null }) => {

    const navigate = useNavigate();
    const addToCart = useCartStore.use.addToCart();
    const handleProductClick = (productId) => {
        console.log('clique :>> ');
        navigate(`/product/${productId}`);
    };

    const [mouseDownAt, setMouseDownAt] = useState(0);
    const [prevPercentage, setPrevPercentage] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const controls = useAnimation();

    const handleOnDown = (clientX) => {
        setMouseDownAt(clientX);
    };

    const handleOnUp = () => {
        setMouseDownAt(0);
        setPrevPercentage(percentage);
    };

    const handleOnMove = (clientX) => {
        if (mouseDownAt === 0) return;

        const mouseDelta = mouseDownAt - clientX;
        const maxDelta = window.innerWidth / 2;

        const newPercentage = (mouseDelta / maxDelta) * -100;
        const nextPercentage = Math.max(Math.min(prevPercentage + newPercentage, 0), -100);
        setPercentage(nextPercentage);

        controls.start({
            x: `${nextPercentage}%`,
            transition: { duration: 1.2 }
        });
    };


    return (
        <div
            id="image-track"
            onMouseDown={(e) => handleOnDown(e.clientX)}
            onMouseUp={handleOnUp}
            onMouseMove={(e) => handleOnMove(e.clientX)}
            onTouchStart={(e) => handleOnDown(e.touches[0].clientX)}
            onTouchEnd={handleOnUp}
            onTouchMove={(e) => handleOnMove(e.touches[0].clientX)}
        >
            <motion.div
                animate={controls}
                className='caroussel-wraper-div d-flex'
            >
                {collections && collections.map(collection => (
                    <Col key={collection.id} lg={4} sm={6} xs={12} className="mb-0 w-auto">
                        <Card className="collection-card border-0 px-0">
                            <div className='wrapper'>
                                <Card.Img
                                    as={motion.img}
                                    loading='lazy'
                                    variant="top"
                                    src={`/${collection.image}`}
                                    alt={collection.title}
                                    className="img-fluid bg-light-gray"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                />
                                <div className="wrapper-content">
                                    <div className='pt-3 ps-3'>
                                        {collection?.promo && (<a href="#" className="btn btn-lg active p-0 py-2 bg-white border-0 fm-archivo-semibold rounded-pill text-black" role="button" aria-pressed="true">
                                            GET OFF {collection.discount}%
                                        </a>)}
                                    </div>
                                    <div className='pb-3 px-3 d-flex justify-content-between gap-1'>
                                        <button type="button" className="btn text-black bg-white fm-archivo-semibold w-50 rounded-pill p-0"
                                            onClick={() => addToCart(collection)}
                                        ><span></span>ADD TO CART</button>
                                        <button type="button" className="btn border-white text-white fm-archivo-semibold w-50 rounded-pill hover-white p-0 pd-more"
                                            onClick={() => handleProductClick(collection.id)}
                                        >BUY NOW</button>
                                    </div>
                                </div>
                            </div>
                            <Card.Body className="p-0 mt-3">
                                <Card.Title className="fs-3 fm-archivo-semibold m-0 mb-1 text-black text-uppercase d-flex "
                                    onClick={() => handleProductClick(collection.id)}
                                >{collection.title}
                                </Card.Title>
                                <Card.Text className='fm-archivo-semibold fs-4 p-0 text-dark-gray d-flex'>
                                    ${collection.price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                {/* <div>
                    <img className="image" src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                    <Link to="/">  <button type="button" class="btn btn-primary">Primary</button>

                    </Link>
                </div>
                
                <img className="image" src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" draggable="false" />
                <img className="image" src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" /><img className="image" src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                <img className="image" src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" draggable="false" />
                <img className="image" src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" /> */}
                {/* Ajoutez d'autres images ici */}
            </motion.div>
        </div>
    );
};

export default CustomCarousel;
