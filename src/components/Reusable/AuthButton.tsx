import React from 'react';
import { Link } from 'react-router-dom';

type ReusableButtonProps = {
    text: string;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';

    to?: string;
};

const AuthButton: React.FC<ReusableButtonProps> = ({
    text,
    className = '',
    onClick,
    type = 'button',

    to,
}) => {
    const baseClass = `px-6 py-3 text-center rounded cursor-pointer transition duration-200 ease-in-out ${className} `;

    if (to) {
        return (
            <Link to={to} className={baseClass} onClick={onClick}>
                {text}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}

            className={baseClass}
        >
            {text}
        </button>
    );
};

export default AuthButton;
