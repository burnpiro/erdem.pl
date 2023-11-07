import React, { useEffect, useReducer, useRef } from 'react';

const useLoadDiagramData = diagramPath => {
  const ref = useRef({});

  const initialState = {
    error: undefined,
    data: undefined,
  };

  // Keep state logic separated
  const fetchReducer = (state, action) => {
    switch (action.type) {
      case 'loading':
        return { ...initialState };
      case 'fetched':
        return { ...initialState, data: action.payload };
      case 'error':
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!diagramPath) return;

    ref.current = 'loading';

    const fetchData = async () => {
      dispatch({ type: 'loading' });

      // If a cache exists for this url, return it
      if (ref.current[diagramPath]) {
        dispatch({ type: 'fetched', payload: ref.current[diagramPath] });
        return;
      }

      try {
        const response = await import(diagramPath)
        console.log(response);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        // ref.current[diagramPath] = data;

        dispatch({ type: 'fetched', payload: response });
      } catch (error) {
        dispatch({ type: 'error', payload: error });
      }
    };

    void fetchData();
  }, [diagramPath]);

  return state;
};

export default useLoadDiagramData;
