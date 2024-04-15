/**
 * a function named cleanSet that returns a string of all the set values
 * that start with a specific string (startString)
 * @param {set} set - set object
 * @param {string} startString - the sprefix string
 * @return {string} - return a string
 */
export default function cleanSet(set, startString) {
  if (startString === '' || !set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  // I can't use map on set so I will use 'Array.from'
  // since 'startString' always at the beginning I will only pass the length of 'startString'
  const arrayString = Array.from(set)
    .filter((fullString) => fullString.includes(startString))
    .map((fullString) => fullString.slice(startString.length));

  return arrayString.join('-');
}
