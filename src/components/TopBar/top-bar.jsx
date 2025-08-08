import { useDispatch } from "react-redux";
import { resetMessages } from "../../features/chat/chatSlice";

export function TopBar() {
  const dispatch = useDispatch();

  const handleStartOver = () => {
    if (window.confirm("Are you sure you want to start over?")) {
      dispatch(resetMessages());
      // dispatch(resetArticles());
    }
  };

  return (
    <div className="flex items-center justify-end px-4 py-3 border-b border-gray-200 bg-white gap-x-4">
      <button
        onClick={handleStartOver}
        className="px-3 py-1.5 text-sm font-medium rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800"
      >
        Start Over
      </button>
      <button
        onClick={() => {}}
        className="px-3 py-1.5 text-sm font-medium rounded-full bg-black text-white hover:bg-gray-900"
      >
        Done
      </button>
    </div>
  );
}
