import React from 'react';
import './flex.css';

type FlexProps = {
  children: React.ReactNode[] | React.ReactNode;
  direction?: 'row' | 'column';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  gap?: number;
  style?: React.CSSProperties | undefined
};

export const Flex: React.FC<FlexProps> = ({ children, direction = 'row', alignItems = 'center', justifyContent = 'center', gap, style }) => {
  return <div style={{
    display: 'flex',
    flexDirection: direction,
    alignItems,
    justifyContent,
    gap: `${gap}px`,
    ...style,
  }}>
    {children}
  </div>;
};

export default Flex;