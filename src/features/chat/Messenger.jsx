import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "./chat";

function Messenger() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const prompt = inputRef.current.value.trim();
    if (prompt.length > 0) {
      dispatch(addMessage({ type: "request", text: prompt }));
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <h1>Messenger Component</h1>
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
      </form>
    </div>
  );
}

export default Messenger;
