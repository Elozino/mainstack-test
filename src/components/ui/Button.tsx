
type ButtonProps = {
  text: string;
  className: string;
  onClick?: () => void;
  icon?: JSX.Element;
}
const Button = ({ text, className, onClick, icon }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      {text}
      {icon}
    </button>
  )
}

export default Button