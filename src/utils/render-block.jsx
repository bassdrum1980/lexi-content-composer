export function renderContentBlock(block, key) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={key} className="mb-4 leading-relaxed text-gray-800">
          {block.text}
        </p>
      );
    case "header": {
      const HeadingTag = `h${block.level}`;
      return (
        <HeadingTag key={key} className="mt-5 mb-2 font-semibold text-gray-900">
          {block.text}
        </HeadingTag>
      );
    }
    case "list": {
      const ListTag = block.list_type === "ordered" ? "ol" : "ul";
      return (
        <ListTag
          key={key}
          className="list-inside pl-5 mb-4 space-y-1 text-gray-800 leading-relaxed"
        >
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ListTag>
      );
    }
    case "note":
      return (
        <div
          key={key}
          className="flex items-start gap-2 bg-yellow-50 border-l-4 border-yellow-400 px-4 py-3 rounded mb-4 text-sm text-gray-800"
        >
          <span className="text-lg">{block.icon}</span>
          <span>{block.text}</span>
        </div>
      );
    default:
      return null;
  }
}
