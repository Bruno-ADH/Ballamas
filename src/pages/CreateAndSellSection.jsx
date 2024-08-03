import React from 'react';
// import './CreateAndSellSection.css';

const CreateAndSellSection = () => {
  const steps = [
    { step: '1', title: 'Create', description: 'Create your NFT easily.' },
    { step: '2', title: 'List', description: 'List it on our marketplace.' },
    { step: '3', title: 'Sell', description: 'Sell your NFT and get paid.' },
  ];

  return (
    <section id="create" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Create and Sell Now</h2>
        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className="col-md-4 text-center">
              <div className="card p-4 mb-4">
                <h3>Step {step.step}</h3>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreateAndSellSection;
