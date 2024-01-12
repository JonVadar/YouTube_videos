import { useReducer } from "react";

const SimpleEx = () => {
  // const [state, dispatch] = useReducer(reducer, initialArg, init?)

  // Reducer function
  const nameReducer = (state, action) =>
    action.type === "change" ? "Jon" : state;

  // Reducer hook
  const [name, setName] = useReducer(nameReducer, "Mike");

  return (
    <div>
      <h1>{name}</h1>
      <button
        onClick={() => {
          setName({ type: "change" });
        }}
      >
        Change
      </button>
    </div>
  );
};

export default SimpleEx;
