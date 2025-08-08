import Article from "./features/article/article";
import Messenger from "./features/chat/Messenger";
import { TopBar } from "./components/TopBar/top-bar";

function App() {
  return (
    <>
      <TopBar />
      <Article />
      <Messenger />
    </>
  );
}

export default App;
