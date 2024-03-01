import { useSelector } from "react-redux";
import "./App.css";
import CreatePost from "./components/create-post.component";
import PostBox from "./components/post-box.components";
import { RootState } from "./store/store";

function App() {
  const posts = useSelector((state: RootState) => state?.posts?.posts);
  return (
    <main className="flex justify-center mt-3  ">
      <div className="container flex flex-col w-[600px] justify-center">
        <CreatePost />
        {posts &&
          posts.map((item, idx) => {
            return <PostBox key={idx} data={item} />;
          })}
      </div>
    </main>
  );
}

export default App;
