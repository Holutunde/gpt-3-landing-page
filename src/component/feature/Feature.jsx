import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
  <div className="feature_container">
    <div className="title">
      <div/>
      <h1>{title}</h1>
    </div>
    <div className="text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
