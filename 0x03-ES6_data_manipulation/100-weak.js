export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const currentCount = (weakMap.get(endpoint) || 0) + 1;
  weakMap.set(endpoint, currentCount);

  if (currentCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  return currentCount;
}
