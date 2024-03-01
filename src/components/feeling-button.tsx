import { FeelingObject } from "./post-modal.component";
import UIButton from "./ui/button.ui";

type ComponentProps = {
  onClick: () => void;
  data: FeelingObject;
};

export const FeelingButton: React.FC<ComponentProps> = ({ onClick, data }) => {
  return (
    <UIButton
      onClick={onClick}
      type="text"
      className="text-[16px] h-[40px] items-center w-6/12 flex justify-start"
    >
      <span>{data.emoji}</span>
      <span className="ml-2">{data?.text}</span>
    </UIButton>
  );
};
