export function sum(a, b) {
  return {
    type: "SUM",
    payload: [a, b],
  };
}

export function substract(a, b) {
  return {
    type: "SUBSTRACT",
    payload: [a, b],
  };
}
