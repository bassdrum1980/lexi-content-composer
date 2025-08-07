import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./chatSlice";
import { useSendPromptMutation } from "../../services/llmApi";

function Messenger() {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const inputRef = useRef(null);
  const [sendPrompt, { isLoading, isError }] = useSendPromptMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const prompt = inputRef.current.value.trim();
    if (prompt.length > 0) {
      dispatch(addMessage({ type: "request", text: prompt }));
      sendPrompt(prompt);
      inputRef.current.value = "";
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching response.</div>;
  }

  return (
    <div>
      <h1>Messenger Component</h1>
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
      </form>
      <ul>
        {messages.map((message) => (
          <li key={message.id} className={message.type}>
            {message.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Messenger;
