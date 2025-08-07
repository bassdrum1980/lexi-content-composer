import { Outlet } from "react-router-dom";
import { TopBar } from "./components/TopBar/top-bar";

function App() {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
}

export default App;
