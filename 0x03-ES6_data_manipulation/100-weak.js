/* eslint-disable no-plusplus  */
export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  let count = weakMap.get(endpoint) || 0;
  count++;
  weakMap.set(endpoint, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
};

export default weakMap;