// import Api from "Api";

const apiMiddleware = (store) => (next) => (action) => {
  if (action.type === "API_CALL") {
    const { promise, actions } = action;

    promise
      .then((response) => {
        return store.dispatch({
          type: actions.success.type,
          payload: { ...response, ...actions?.success.payload },
        });
      })
      .catch((error) => {
        return store.dispatch({
          type: actions.fail.type,
          payload: error,
        });
      });
  }

  return next(action);
};

export default apiMiddleware;
