import { Feelings } from "../data/emojis-list";
import { FeelingObject } from "./post-modal.component";
import UIButton from "./ui/button.ui";
import UIModal from "./ui/modal.ui";

type ComponentProps = {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  onSetFeelings: (value: FeelingObject) => void;
};
export const FeelingModal: React.FC<ComponentProps> = ({
  isOpen,
  setOpen,
  onSetFeelings,
}) => {
  return (
    <div>
      <UIModal
        centered
        title="How are you feeling?"
        onCancel={() => setOpen(false)}
        footer={false}
        open={isOpen}
      >
        <div>
          <div className="flex flex-wrap">
            {Feelings.map((item, idx) => {
              return (
                <UIButton
                  onClick={() => onSetFeelings(item)}
                  key={idx}
                  type="text"
                  className="text-[16px] h-[40px] items-center w-6/12 flex justify-start"
                >
                  <span>{item.emoji}</span>
                  <span className="ml-2">{item?.text}</span>
                </UIButton>
              );
            })}
          </div>
        </div>
      </UIModal>
    </div>
  );
};
