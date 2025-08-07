import Messenger from "../features/chat/Messenger";
import Article from "../features/article/Article";

const HomePage = () => {
  return (
    <div>
      Home Page
      <Article />
      <Messenger />
    </div>
  );
};

export default HomePage;
