import { useSelector } from "react-redux";
import { renderContentBlock } from "../../utils/render-block";

export default function Rules() {
  const topic = useSelector((state) => state.rules?.rules?.topic);
  const rules = useSelector((state) => state.rules?.rules?.rules);
  if (!rules || !rules.length) return null;

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm text-gray-900">
      <h1 className="text-2xl font-bold mb-2">{topic}</h1>
      {rules.map((rule) => (
        <section key={rule.rule_id} className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{rule.rule_title}</h2>
          {rule.content.map((block, blockIdx) =>
            renderContentBlock(block, blockIdx)
          )}
        </section>
      ))}
    </div>
  );
}
