import { SmileOutlined, UserOutlined } from "@ant-design/icons";
import UIAvatar from "./ui/avatar.ui";
import { UITextArea } from "./ui/input.ui";
import UIModal from "./ui/modal.ui";
import { UIText, UITitle } from "./ui/title.ui";
import UIButton from "./ui/button.ui";
import UITooltip from "./ui/tooltip.ui";
import { ChangeEvent, useState } from "react";
import { FeelingModal } from "./feeling-modal.component";

type ComponentProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};
export type FeelingObject = {
  emoji: string;
  text: string;
};
const PostModal: React.FC<ComponentProps> = ({
  isOpen,
  setIsOpen,
}): JSX.Element => {
  const [post, setPost] = useState<string>("");
  const [feeling, setFeeling] = useState<FeelingObject>({} as FeelingObject);
  const [showFeelingModal, setShowFeelingModal] = useState<boolean>(false);
  const onPost = () => {};
  const onSetFeelings = (value: FeelingObject) => {
    setShowFeelingModal(false);
    setFeeling(value);
  };
  return (
    <>
      <FeelingModal
        isOpen={showFeelingModal}
        setOpen={setShowFeelingModal}
        onSetFeelings={onSetFeelings}
      />
      <UIModal
        centered
        onCancel={() => setIsOpen(false)}
        footer={
          <div>
            <UIButton
              className="w-full bg-blue-600 font-semibold text-lg h-9"
              type="primary"
              disabled={post == "" ? true : false}
              onClick={onPost}
            >
              Post
            </UIButton>
          </div>
        }
        title={
          <UITitle level={4} className="text-center w-full">
            Create post
          </UITitle>
        }
        open={isOpen}
      >
        <div className="flex">
          <UIAvatar size={40} icon={<UserOutlined />} />
          <div className="flex flex-col ml-2 ">
            <UIText className="m-0 font-bold">
              Muhammad Zain{" "}
              {feeling?.emoji && `is ${feeling?.emoji} feeling ${feeling.text}`}
            </UIText>
            <UIText className="m-0 text-xs text-gray-500 font-semibold">
              a few seconds ago
            </UIText>
          </div>
        </div>
        <div>
          <UITextArea
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setPost(e.target.value)
            }
            placeholder="What's on your mind?"
            className="border-none w-full text-lg p-0 mt-2 focus:border-none focus-within:shadow-none"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </div>
        <div className="flex justify-between border border-gray-200 items-center p-4">
          <UIText className="font-semibold">Add to your post</UIText>

          <div>
            <UITooltip placement="top" title={"Feeling/activity"}>
              <div
                className="p-1 hover:bg-gray-100 rounded"
                onClick={() => setShowFeelingModal(true)}
              >
                <SmileOutlined className="text-2xl text-orange-500" />
              </div>
            </UITooltip>
          </div>
        </div>
      </UIModal>
    </>
  );
};

export default PostModal;
