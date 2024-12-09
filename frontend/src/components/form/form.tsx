import React from 'react';
import './form.css';

type FormProps = {
    onSubmit: (e: React.FormEvent) => Promise<void>;
    children: React.ReactNode;
};

export const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
    return <form onSubmit={onSubmit} className="form">
        {children}
    </form>;
};

export default Form;