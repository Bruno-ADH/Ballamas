import React from 'react';
// import './CollectionsSection.css';

const CollectionsSection = () => {
  const collections = [
    { title: 'Art 1', description: 'Description of art 1', imgSrc: '/path-to-image1.jpg' },
    { title: 'Art 2', description: 'Description of art 2', imgSrc: '/path-to-image2.jpg' },
    // Ajouter plus d'éléments ici
  ];

  return (
    <section id="collections" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Our Collections</h2>
        <div className="row">
          {collections.map((collection, index) => (
            <div key={index} className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img src={collection.imgSrc} className="card-img-top" alt={collection.title} />
                <div className="card-body">
                  <h5 className="card-title">{collection.title}</h5>
                  <p className="card-text">{collection.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
