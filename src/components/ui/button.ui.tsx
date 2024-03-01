import { Button, ButtonProps } from "antd";

type ComponentProps = {
  children: React.ReactNode;
};

const UIButton: React.FC<ComponentProps | ButtonProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <Button {...props}>{children}</Button>;
};
export default UIButton;
