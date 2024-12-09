import React from 'react';
import './card.css';

type CardProps = {
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="card"> {children} </div>;
};

export default Card;