import React from 'react';

const PaymentOption = ({ icon, label, selected, onClick }) => (
    <div 
      onClick={onClick}
      className={`border d-flex flex-column align-items-start justify-content-start gap-1  ${selected ? 'border-black border-1' : 'border-gray border-1'}`}
      style={{
        borderRadius: '12px',
        padding: '12px',
        cursor: 'pointer',
        height: '76px',
        width: '100%'
      }}
    >
      <div className='fs-0' >{icon}</div>
      <div className='fm-archivo-Medium fs-12 text-black'>{label}</div>
    </div>
  );

export default PaymentOption;