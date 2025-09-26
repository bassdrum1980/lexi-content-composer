/**
 * @api {post} /cards/ Create Card
 * @apiBody {String} front
 * @apiBody {String} back
 * @apiBody {Number} ruleId
 */

/**
 * @api {post} /rules/ Create Rule
 * @apiBody {String} content JSON string
 * @apiBody {Number} articleId
 */

/**
 * @api {post} /articles/ Create Article
 * @apiBody {String} title
 * @apiBody {String} content JSON string
 * @apiBody {String[]} tags
 */

/**
 * @api {post} /bundles/ Create Bundle
 * @apiBody {Object[]} cards
 * @apiBody {Object[]} rules
 * @apiBody {Object} article
 */

/**
 * @api {post} /prompts/ Send prompt
 * @apiBody {String} prompt
 */
import { createServer } from "miragejs";
import mockArticle from "./article.json";
import mockRules from "./rules.json";

export function makeServer() {
  createServer({
    routes() {
      this.namespace = "/";

      this.post("cards/", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return { id: Date.now(), ...attrs };
      });

      this.post("rules/", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return { id: Date.now(), ...attrs };
      });

      this.post("articles/", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return { id: Date.now(), ...attrs };
      });

      this.post("bundles/", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return { id: Date.now(), ...attrs };
      });

      this.post("prompts/", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        // For now I'm returning all mock data with any response
        // I will have to keep some state of the conversation
        // to hit different endpoints based on the prompt
        return {
          response: `Echo: ${attrs.prompt}`,
          article: mockArticle,
          rules: mockRules,
        };
      });
    },
  });
}
