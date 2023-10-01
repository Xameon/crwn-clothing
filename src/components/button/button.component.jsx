import './button.style.scss';

const BUTTON_STYLE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonStyle, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_STYLE_CLASSES[buttonStyle]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
