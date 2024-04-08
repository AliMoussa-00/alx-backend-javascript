export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const element of array) {
    array[i] = appendString + element;
    i += 1;
  }

  return array;
}
