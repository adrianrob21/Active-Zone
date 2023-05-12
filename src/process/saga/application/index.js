export const init = function* () {};

export const requestFail = function* ({ payload }) {
  yield console.log(payload.code);
};
