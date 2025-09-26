import { useSelector } from "react-redux";
import Article from "./features/article/article";
import Rules from "./features/rules/Rules";
import Messenger from "./features/chat/Messenger";
import { TopBar } from "./components/TopBar/top-bar";

function App() {
  const article = useSelector((state) => state.article.article);

  return (
    <div className="h-screen max-h-screen flex flex-col">
      <TopBar />

      <div className="flex-1 flex overflow-auto">
        {/* Column 1 */}
        <div className="flex-1 flex flex-col overflow-auto border-r">
          {/* Replace with your content */}
          {article && <Article />}
        </div>
        {/* Column 2 */}
        <div className="flex-1 flex flex-col overflow-auto border-r">
          <div className="p-4">Rules</div>
          <Rules />
        </div>
        {/* Column 3 */}
        <div className="flex-1 flex flex-col overflow-auto">
          <Messenger />
        </div>
      </div>
    </div>
  );
}

export default App;
