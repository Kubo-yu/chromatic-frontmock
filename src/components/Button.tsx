import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  link?: string;
  type?: string
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  label,
  link,
  type,
  ...props
}: ButtonProps) => {
  if (link) {
    return (
      <a
        href={link}
        className="button"
        {...props}
      >
        {label}
      </a>
    );
  } else if (type) {
    return (
      <input
        type={type}
        className="button"
        value={label}
        {...props}
      >
      </input>
    );
  } else {
    return (
      <button
        type="button"
        className="button"
        {...props}
      >
        {label}
      </button>
    );
  }
};

export default Button;