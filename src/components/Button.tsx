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
  const buttonStyle = {
    padding: '100px',
  };
  if (link) {
    return (
      <a
        href={link}
        className="button"
        {...props}
        style={buttonStyle}
      >
        {/* {label} */}
      </a>
    );
  } else if (type) {
    return (
      <input
        type={type}
        className="button"
        value={label}
        {...props}
        style={buttonStyle}
      >
      </input>
    );
  } else {
    return (
      <button
        type="button"
        className="button"
        {...props}
        style={buttonStyle}
      >
        {/* {label} */}
      </button>
    );
  }
};

export default Button;