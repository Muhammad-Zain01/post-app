import {
  CommentOutlined,
  LikeOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import UIAvatar from "./ui/avatar.ui";
import { UIText, UITitle } from "./ui/title.ui";
import UIButton from "./ui/button.ui";
import CommentBox from "./comment-box.component";

const PostBox = () => {
  return (
    <div className="bg-white mt-4 p-4 rounded shadow">
      <div className="flex">
        <UIAvatar size={40} icon={<UserOutlined />} />
        <div className="flex flex-col ml-2 ">
          <UIText className="m-0 font-bold">Muhammad Zain</UIText>
          <UIText className="m-0 text-xs text-gray-500 font-semibold">
            a few seconds ago
          </UIText>
        </div>
      </div>
      <div className="my-3 text-sm">Body</div>
      <hr />
      <div className="flex my-3">
        <UIButton
          type="text"
          className="w-4/12 flex justify-center items-center font-semibold"
        >
          <LikeOutlined />
          Link
        </UIButton>
        <UIButton
          type="text"
          className="w-4/12 flex justify-center items-center font-semibold"
        >
          <CommentOutlined />
          Comment
        </UIButton>
        <UIButton
          type="text"
          className="w-4/12 flex justify-center items-center font-semibold"
        >
          <ShareAltOutlined />
          Share
        </UIButton>
      </div>
      <hr />
      <CommentBox />
    </div>
  );
};

export default PostBox;
