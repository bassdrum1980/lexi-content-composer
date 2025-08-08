import { useSelector } from "react-redux";
import { renderContentBlock } from "./utils/render-block";

export default function Article() {
  const article = useSelector((state) => state.article.article);
  if (!article) return null;

  return (
    <article className="p-6 bg-white rounded-xl shadow-sm text-gray-900">
      <h1 className="text-2xl font-bold mb-2">{article.article_title}</h1>
      <p className="text-gray-700 mb-6">{article.summary}</p>

      {article.sections.map((section, idx) => (
        <section key={idx} className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            {section.section_title}
          </h2>
          {section.content.map((block, blockIdx) =>
            renderContentBlock(block, blockIdx)
          )}
        </section>
      ))}
    </article>
  );
}
