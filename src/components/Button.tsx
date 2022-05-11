interface Props {
  className?: string;
  type?: "button" | "submit";
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  className,
  type,
  text,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={`btn ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;
