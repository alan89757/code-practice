import { createIndexOfFinder } from "./tools";
const indexOf = createIndexOfFinder(1);
const lastIndexOf = createIndexOfFinder(-1);

export {
  indexOf,
  lastIndexOf
}