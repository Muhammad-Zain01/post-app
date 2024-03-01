import { DropDownProps, Dropdown } from "antd";

type ComponentProps =
  | {
      children: React.ReactNode;
    }
  | DropDownProps;

const UIDropdown: React.FC<ComponentProps> = ({ children, ...props }) => {
  return <Dropdown {...props}>{children}</Dropdown>;
};

export default UIDropdown;
