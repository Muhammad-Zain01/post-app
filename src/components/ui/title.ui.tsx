import { Typography, TypographyProps } from "antd";

const { Title, Text } = Typography;

type ComponentProps = {
  children: React.ReactNode;
};

export const UITitle: React.FC<ComponentProps | TypographyProps> = ({
  children,
  ...props
}): JSX.Element => {
  return (
    <Title className="mt-3" {...props}>
      {children}
    </Title>
  );
};

export const UIText: React.FC<ComponentProps | TypographyProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <Text {...props}>{children}</Text>;
};
