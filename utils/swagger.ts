import path from "path";
import YAML from "yamljs";

const swaggerDocument = YAML.load(path.join(process.cwd(), "swagger.yaml"));

export default swaggerDocument;
