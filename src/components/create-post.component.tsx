import { UserOutlined } from "@ant-design/icons";
import UIAvatar from "./ui/avatar.ui";
import UIInput from "./ui/input.ui";
import PostModal from "./post-modal.component";
import { useDispatch } from "react-redux";
import { initiateSave } from "../store/post/app.reducer";

const CreatePost = () => {
  const dispatch = useDispatch();
  const onClickInput = () => dispatch(initiateSave());
  return (
    <div className=" bg-white p-4 rounded shadow">
      <PostModal />
      <div className="flex">
        <UIAvatar size={40} icon={<UserOutlined />} />
        <UIInput
          placeholder="What's on your mind?, Zain"
          className="w-full ml-2 px-4 border-none bg-gray-100 rounded-full"
          onClick={onClickInput}
          value=""
        />
      </div>
    </div>
  );
};
export default CreatePost;
