export function createStore(reducer) {
  // 1.state
  let state;
  let subscribers = [];
  // 2. a way to access this state
  const getState = () => state;
  // 3. a way to update this state
  const dispatch = (action) => {
    // calculate next state
    state = reducer(state, action);
    // call all subscribers
    subscribers.forEach((subscriber) => subscriber());
  };
  // 4. a way to subscribe and unsubscribe to changes in this state
  const subscribe = (subscriber) => {
    subscribers.push(subscriber);
    return () => {
      subscribers = subscribers.filter((s) => s !== subscriber);
    };
  };

  dispatch({});

  return { getState, dispatch, subscribe };
}
