import {
  CaretDownOutlined,
  CommentOutlined,
  DownOutlined,
  LikeOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import UIAvatar from "./ui/avatar.ui";
import { UIText, UITitle } from "./ui/title.ui";
import UIButton from "./ui/button.ui";
import CommentBox from "./comment-box.component";
import { PostPayload, removePost } from "../store/post/post.reducer";
import UIDropdown from "./ui/dropdown.ui";
import { useDispatch } from "react-redux";
import { initiateEdit, setOpen } from "../store/post/app.reducer";

type ComponentProps = {
  data: PostPayload;
};

const PostBox: React.FC<ComponentProps> = ({ data }) => {
  const dispatch = useDispatch();
  const feeling = data?.feeling;
  const selectDropItem = (value) => {
    if (value == "del") {
      dispatch(removePost(data?.id));
    } else if (value == "edit") {
      dispatch(
        initiateEdit({ post: data.post, feeling: data.feeling, id: data?.id })
      );
    }
  };
  const items = [
    {
      key: "edit",
      label: <span onClick={() => selectDropItem("edit")}>Edit</span>,
    },
    {
      key: "del",
      label: <span onClick={() => selectDropItem("del")}>Delete</span>,
    },
  ];
  return (
    <div className="bg-white mt-4 p-4 rounded shadow">
      <div className="flex justify-between">
        <div className="flex">
          <UIAvatar size={40} icon={<UserOutlined />} />
          <div className="flex flex-col ml-2 ">
            <UIText className="m-0 font-bold">
              {data?.author}{" "}
              {feeling?.emoji && `is ${feeling?.emoji} feeling ${feeling.text}`}
            </UIText>
            <UIText className="m-0 text-xs text-gray-500 font-semibold">
              a few seconds ago
            </UIText>
          </div>
        </div>
        <div>
          <UIDropdown menu={{ items }} trigger={"click"}>
            <CaretDownOutlined />
          </UIDropdown>
        </div>
      </div>
      <div className="my-3 text-sm">{data?.post}</div>
      <div className="flex justify-between text-xs text-gray-500">
        <div>0 Likes</div>
        <div>
          {data?.comments?.length} comments{"  "}0 share
        </div>
      </div>
      <hr />
      <div className="flex my-3">
        <UIButton
          type="text"
          className="w-4/12 flex justify-center items-center font-semibold"
        >
          <LikeOutlined />
          {data?.isLiked ? "Liked" : "Like"}
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
      <CommentBox data={data?.comments} id={data?.id} />
    </div>
  );
};

export default PostBox;
