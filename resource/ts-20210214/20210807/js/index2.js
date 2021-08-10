import fs from "fs";
import path, { isFoler } from "path";
const result = [];
function findAllFiles(root) {
  const files = fs.readdirSync(root);
  files.forEach((name) => {
    const file = path.resolve(root, name);
    if (isFoler(file)) {
      findAllFiles(file);
    } else {
      result.push({
        path: file,
        check: false,
        content: fs.readFileSync(file)
      });
    }
  });
}
