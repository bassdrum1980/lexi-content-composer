import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./chatSlice";
import { useSendPromptMutation } from "../../services/llmApi";
import { PromptForm } from "../../components/PromptForm";
import { ChatHistory } from "../../components/ChatHistory/chat-history";

function Messenger() {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const [sendPrompt, { isLoading, isError }] = useSendPromptMutation();

  const handleSubmit = (prompt) => {
    dispatch(addMessage({ type: "request", text: prompt }));
    sendPrompt(prompt);
  };

  if (isError) {
    return <div>Error occurred while fetching response.</div>;
  }

  return (
    <div>
      <h1>Messenger Component</h1>
      <ChatHistory messages={messages} />
      <PromptForm onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
}

export default Messenger;
