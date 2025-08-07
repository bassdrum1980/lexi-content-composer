import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetMessages } from "../../features/chat/chatSlice";

export function TopBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBack = () => {
    navigate(-1);
  };

  const handleStartOver = () => {
    if (window.confirm("Are you sure you want to start over?")) {
      dispatch(resetMessages());
      // dispatch(resetArticles());
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
      <button
        onClick={handleBack}
        className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        Back
      </button>

      <div className="flex items-center gap-2">
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
    </div>
  );
}
