import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";
import UIAvatar from "./ui/avatar.ui";
import { Comments, removeComment } from "../store/post/post.reducer";
import { useDispatch } from "react-redux";
import { UIText } from "./ui/title.ui";
import UIDropdown from "./ui/dropdown.ui";
import { initiateEditComment } from "../store/post/app.reducer";

type ComponentProps = {
  data: Comments;
  postId: string;
};

export const Comment: React.FC<ComponentProps> = ({ postId, data }) => {
  const dispatch = useDispatch();
  const selectDropItem = (value: string) => {
    if (value == "del") {
      dispatch(removeComment({ postid: postId, commentid: data?.id }));
    } else if (value == "edit") {
      dispatch(
        initiateEditComment({ commentId: data?.id, comment: data?.comment })
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
    <div className="flex mt-6 ">
      <div>
        <UIAvatar size={35} icon={<UserOutlined />} />
      </div>
      <div className="flex ml-2 bg-gray-100 px-2 rounded-lg py-1 w-full  justify-between">
        <div className="flex ml-2 flex-col">
          <UIText className="m-0 font-bold text-xs">{data?.user}</UIText>
          <UIText className="m-0 text-xs text-gray-500 font-semibold">
            {data?.comment}
          </UIText>
        </div>
        <div>
          <UIDropdown menu={{ items }} trigger={"click"}>
            <CaretDownOutlined className="text-gray-600" />
          </UIDropdown>
        </div>
      </div>
    </div>
  );
};
