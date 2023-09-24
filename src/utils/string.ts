import { DELAY_IN_MS } from "../constants/delays";
import { ElementStates } from "../types/element-states";
import { StringCircle } from "../types/string";
import { setDelay, swap } from "./utils";

export const reverseString = async (string: StringCircle[], setSring: any) => {
  const mid = Math.ceil(string.length / 2);
  for (let i = 0; i < mid; i++) {
      let j = string.length - 1 - i;
      if (i !== j) {
          string[i].state = ElementStates.Changing;
          string[j].state = ElementStates.Changing;
          setSring([...string]);
          await setDelay(DELAY_IN_MS);
      }
      swap(string, i, j);
      string[i].state = ElementStates.Modified;
      string[j].state = ElementStates.Modified;
      setSring([...string]);
  }
  return string;
};
