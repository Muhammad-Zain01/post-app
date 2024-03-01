import { Feelings } from "../data/emojis-list";
import { FeelingButton } from "./feeling-button";
import { FeelingObject } from "./post-modal.component";
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
                <FeelingButton
                  key={idx}
                  data={item}
                  onClick={() => onSetFeelings(item)}
                />
              );
            })}
          </div>
        </div>
      </UIModal>
    </div>
  );
};
