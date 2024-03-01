import { UserOutlined } from "@ant-design/icons";
import UIAvatar from "./ui/avatar.ui";
import UIInput from "./ui/input.ui";
import { UIText } from "./ui/title.ui";

const CommentBox = () => {
  return (
    <div>
      <div className="flex my-3">
        <div>
          <UIAvatar size={40} icon={<UserOutlined />} />
        </div>
        <UIInput
          placeholder="Write your comment"
          className="w-full ml-2 px-4 border-none bg-gray-100 rounded-full"
        />
      </div>
      <div className="flex mt-6 ">
        <div>
          <UIAvatar size={35} icon={<UserOutlined />} />
        </div>
        <div className="flex ml-2 bg-gray-100 px-2 rounded-lg py-1 w-full flex-col justify-center">
          <UIText className="m-0 font-bold text-xs">Muhammad Zain</UIText>
          <UIText className="m-0 text-xs text-gray-500 font-semibold">
            a few seconds ago
          </UIText>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
