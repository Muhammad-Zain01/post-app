import { Avatar, AvatarProps } from "antd";

const UIAvatar: React.FC<AvatarProps> = ({ ...props }): JSX.Element => {
  return <Avatar {...props} />;
};
export default UIAvatar;
