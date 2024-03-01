import { Tooltip, TooltipProps } from "antd";

type ComponentProps =
  | {
      children: React.ReactNode;
    }
  | TooltipProps;
const UITooltip: React.FC<ComponentProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <Tooltip {...props}>{children}</Tooltip>;
};

export default UITooltip;
