import { SmileOutlined, UserOutlined } from "@ant-design/icons";
import UIAvatar from "./ui/avatar.ui";
import UIInput from "./ui/input.ui";
import { Comments, addComment, editComment } from "../store/post/post.reducer";
import { ChangeEvent, KeyboardEventHandler, useEffect, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { useDispatch, useSelector } from "react-redux";
import { Comment } from "./comment.component";
import { RootState } from "@reduxjs/toolkit/query";
import { initialSaveComment } from "../store/post/app.reducer";

type ComponentProps = {
  data: Comments[];
  id: string;
};
const CommentBox: React.FC<ComponentProps> = ({ data, id }) => {
  const app = useSelector((state: RootState) => state?.app);
  const [comment, setComet] = useState<string>("");
  const isCommentEditing = app?.isCommentEditing;
  const commentId = app?.commentId;
  useEffect(() => {
    setComet(app?.comment);
  }, [isCommentEditing]);

  const [showEmojiModal, setShowEmojiModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const submitComment = () => {
    if (comment != "") {
      if (isCommentEditing) {
        dispatch(
          editComment({ commentId: commentId, id: id, comment: comment })
        );
        dispatch(initialSaveComment());
      } else {
        dispatch(addComment({ id: id, comment: comment }));
      }
    }
    setComet("");
  };
  const onKeyDown = (e: KeyboardEventHandler<HTMLInputElement>) => {
    if (e?.which == 13) {
      submitComment();
    }
  };
  const onEmojiClick = (e) => {
    setComet(comment + `${e?.emoji}`);
  };

  return (
    <div>
      <div className="flex my-3">
        <div>
          <UIAvatar size={40} icon={<UserOutlined />} />
        </div>
        <UIInput
          placeholder="Write your comment"
          className="w-full ml-2 px-4 border-none bg-gray-100 rounded-full"
          value={comment}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setComet(e.target.value);
          }}
          onKeyDown={onKeyDown}
          suffix={
            <div style={{ position: "relative" }}>
              <SmileOutlined
                className="text-xl text-gray-400"
                onClick={() => setShowEmojiModal(!showEmojiModal)}
              />
              <EmojiPicker
                style={{ position: "absolute", top: 35, right: 15 }}
                open={showEmojiModal}
                onEmojiClick={onEmojiClick}
              />
            </div>
          }
        />
      </div>

      {data &&
        data.map((item, idx) => {
          return <Comment postId={id} data={item} key={idx} />;
        })}
    </div>
  );
};

export default CommentBox;
