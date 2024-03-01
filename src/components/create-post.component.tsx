import { UserOutlined } from "@ant-design/icons";
import UIAvatar from "./ui/avatar.ui";
import UIInput from "./ui/input.ui";
import PostModal from "./post-modal.component";

const CreatePost = () => {
  return (
    <div className=" bg-white p-4 rounded shadow">
      <PostModal />
      <div className="flex">
        <UIAvatar size={40} icon={<UserOutlined />} />
        <UIInput
          placeholder="What's on your mind?, Zain"
          className="w-full ml-2 px-4 border-none bg-gray-100 rounded-full"
        />
      </div>
    </div>
  );
};
export default CreatePost;
