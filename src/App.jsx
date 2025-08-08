import { useSelector } from "react-redux";
import Article from "./features/article/article";
import Messenger from "./features/chat/Messenger";
import { TopBar } from "./components/TopBar/top-bar";

function App() {
  const article = useSelector((state) => state.article.article);

  return (
    <>
      <TopBar />
      <div className="flex h-screen">
        {article && <Article />}
        <Messenger />
      </div>
    </>
  );
}

export default App;
