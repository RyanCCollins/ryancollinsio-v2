import { sequence } from './promiseUtils';

export function fetchComponentData(store, components, params) {
  const needs = components.reduce((prev, current) => {
    return (current.need || [])
      .concat(
        (current.WrappedComponent &&
          (current.WrappedComponent.need !== current.need) ?
            current.WrappedComponent.need : []
          )
          || []
        )
      .concat(prev);
  }, []);

  return sequence(needs, need => store.dispatch(need(params, store.getState())));
}
