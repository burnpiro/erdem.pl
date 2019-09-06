---
title: React - state management without libraries (with hooks)
date: '2019-09-06'
template: 'post'
draft: false
tags:
  - 'Libraries'
  - 'Javascript'
  - 'React'
  - 'State'
description: 'How to manage state without any external libraries in React? Structure and implementation of state manager for small and middle size apps with hooks.'
---

> It might be beneficial to have CodeSandbox editor opened when reading this blog post.

<iframe src="https://codesandbox.io/embed/crimson-leftpad-07vke?fontsize=14" title="crimson-leftpad-07vke" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Why don't you want to use state manager anyway?

State managers (like [Redux](https://redux.js.org/) or [MobX](https://mobx.js.org/)) are really great but imho they are just to complex for small apps.

#### What is a "small app"?

We can assume it has less than 10 views and you can print whole state definition on one screen. Let me just give you an example of such a state:

```typescript
// types.ts
interface AppState {
  settings: {
    location: {
      value: string;
      label: string;
      name: string;
    };
    allowNotifications: boolean;
    owner: 'private' | 'business' | 'both';
    priceFrom: string | null;
    priceTo: string | null;
    sizeFrom: string | null;
    sizeTo: string | null;
    interval: number;
  };
  list: {
    name: string;
    seen: boolean;
    hashId: string;
    price?: number;
    imgLink?: string;
    isInFavourites: boolean;
  }[];
  favourites: {
    name: string;
    seen: boolean;
    hashId: string;
    price?: number;
    imgLink?: string;
    isInFavourites: boolean;
  }[];
}
```

> Disclaimer!
> Please don't use this example to create your interface. It's displaied like that just to show whole state at once. It should be splitted into smaller chunks which could be reused. Refer `types.ts` in sandbox example.

That kind of state could be used in app responsible for filtering and storing sales offers from real estate agencies.

## How to handle state like that in our app?

To do that we have to introduce two types of hooks first:

- [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)

If you're not familiar with them I really recommend to stop for a while and check the documentation on the ReactJS website.

**useContext** hook is responsible for creating a **Context** object. Context is designed to share data through the component tree (without props propagation).

**useReducer** hook is like **useState** but it allows you to specify a function that parses incoming data.

What we're going to do is to combine those hooks and create sth similar to Redux. By default, **Context** doesn't provide us with any kind of dispatch method to use. We could go around that problem because it doesn't restrict the type of values stored within the Context. That's where **useReducer** comes into play.

As you know **useReducer** accepts reducer and initial value of state. When it's called we're getting state and dispatch function which could be used as an input into Context.

```typescript
// AppState.tsx
const AppStateContext = React.createContext<AppStateContextType>([
  defaultAppState,
  () => {},
]);

const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultAppState);

  return (
    <AppStateContext.Provider value={[state, dispatch]}>
      {children}
    </AppStateContext.Provider>
  );
};
```

At first, we create a Context that accepts an array with two elements. After that, we have to create our `AppStateProvider` which is a wrapper over `AppStateContext.Provider` and its only purpose is to call `useReducer(reducer, defaultAppState` to get `state` and `dispatch`.

> You might ask why `defaultAppState` is set right here? It's because we have to provide valid argument according to `AppStateContextType`.

## AppState in usage

After exporting our state provider and context:

```typescript
// AppState.tsx
export { AppStateContext, AppStateProvider };
```

We can go back into our main app and put `AppStateProvider` somewhere in the tree.

```typescript
// index.tsx
function App() {
  return (
    <AppStateProvider>
      <AddProperty />
      <ListComponent />
    </AppStateProvider>
  );
}
```

At this moment value of the `AppStateContext` is available to any of the children in the tree (also nested). Let's jump into `AddProperty` component and see how we could access state information.

```typescript
// AddProperty.tsx
import { ACTIONS, AppStateContext } from './AppState';

const [{ settings }, dispatch] = useContext(AppStateContext);
```

As you remember the first element of that array is always a `state` object and the second one is our `dispatch` function. This component has no use for the current state but it requires a method to be able to add new properties into state.

```typescript
// AddProperty.tsx
const submitProperty = (event: React.FormEvent<{}>) => {
  event.preventDefault();
  dispatch({
    type: ACTIONS.ADD_ITEM,
    payload: {
      name: form.name,
    },
  });
  setForm({
    ...defaultFormState,
  });
};
```

`submitProperty` is a `onSubmit` callback for our form. After clicking on the **Submit** button it calls `dispatch` with proper action and that action is handled inside defined reducer.

```typescript
// AppState.tsx
    case ACTIONS.ADD_ITEM:
      return {
        ...state,
        list: [
          {
            ...payload,
            seen: false,
            isInFavourites: false,
            hashId: uuid()
          },
          ...state.list
        ]
      };
```

Every time we dispatch this type of action it adds a new item into our `list` and state is updated within **Context**.

Now we can access that list in another component

```typescript
// ListComponent.tsx
export default function ListComponent() {
  const [{ list }, dispatch] = useContext(AppStateContext);

  const addToFavourites = (event: React.BaseSyntheticEvent<{}>) => {
    const {
      target: {
        dataset: { hashid }
      }
    } = event;
    dispatch({
      type: ACTIONS.ADD_TO_FAVOURITES,
      payload: hashid
    });
  };

  return (
    <React.Fragment>
      <br />
      <h2>List of properties</h2>
      {list.map(element => (
        <div key={element.hashId}>
          <span>{element.name}</span>
          <button onClick={addToFavourites} data-hashid={element.hashId}>
            Add to Fav
          </button>
        </div>
      ))}
      <Favourites />
    </React.Fragment>
  );
}
```

This component displays a current list and allows the user to add some of the elements into **favourites**.

## Conclusion

You don't always have to import external libraries into your project just to manage a simple state. The same effect could be achieved by using builtin methods from React and it doesn't make it any less readable than Redux (you could even copy reducers from it). It's up to you to decide if your app could benefit from a more compact approach.

There is one improvement you could do to make creating reducers easier, but that is a story for another blog post :)