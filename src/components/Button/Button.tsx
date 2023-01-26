import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {}

const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;
  return <button>{children}</button>;
};

export default Button;
