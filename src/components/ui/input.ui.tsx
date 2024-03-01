import { Input, InputProps } from "antd";
import { TextAreaProps } from "antd/es/input";

const { TextArea } = Input;
const UIInput: React.FC<InputProps> = ({ ...props }): JSX.Element => {
  return <Input {...props} />;
};
export const UITextArea: React.FC<TextAreaProps> = ({
  ...props
}): JSX.Element => {
  return <TextArea {...props} />;
};
export default UIInput;
