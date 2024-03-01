import "./App.css";
import CreatePost from "./components/create-post.component";
import PostBox from "./components/post-box.components";

function App() {
  return (
    <main className="flex justify-center mt-3  ">
      <div className="container flex flex-col w-[600px] justify-center">
        <CreatePost />
        <PostBox />
      </div>
    </main>
  );
}

export default App;
