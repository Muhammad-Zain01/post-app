import { Modal, ModalProps } from "antd";

type ComponentProps =
  | {
      children: React.ReactNode;
    }
  | ModalProps;
const UIModal: React.FC<ComponentProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <Modal {...props}>{children}</Modal>;
};

export default UIModal;
