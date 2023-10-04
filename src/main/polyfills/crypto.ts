import crypto from "crypto";

if (typeof global.crypto !== 'object') {
  global.crypto = crypto
}

if (typeof global.crypto.getRandomValues !== 'function') {
  // @ts-ignore
  global.crypto.getRandomValues = getRandomValues;
}

function getRandomValues(array: NodeJS.TypedArray[]) {
  // @ts-ignore
  return crypto.webcrypto.getRandomValues(array)
}
