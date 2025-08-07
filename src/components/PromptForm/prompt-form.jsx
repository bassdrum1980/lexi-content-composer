import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useRef, useEffect } from "react";

export function PromptForm({ onSubmit, isLoading }) {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const prompt = inputRef.current.value.trim();
    if (prompt.length > 0) {
      onSubmit(prompt);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (inputRef.current && isLoading === false) {
      inputRef.current.focus();
    }
  }, [isLoading]);

  return (
    <div className="flex items-center mx-4 rounded-full border border-gray-300 px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-black bg-white">
      <form action="#" onSubmit={handleSubmit} className="flex w-full">
        <input
          type="text"
          placeholder="Type something..."
          className="flex-grow bg-transparent outline-none text-gray-800 placeholder-gray-400"
          ref={inputRef}
          disabled={isLoading}
          autoComplete="off"
          autoFocus
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-black rounded-full text-white hover:bg-gray-800 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          <ArrowUpIcon className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}
