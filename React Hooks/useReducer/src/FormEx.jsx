import { useReducer } from "react";

const FormEx = () => {
  // const [state, dispatch] = useReducer(reducer, initialArg, init?)

  // Reducer function
  const formReducer = (state, action) =>
    action.type === "set" ? { ...state, ...action } : state;

  // Reducer hook
  const [formData, setFormData] = useReducer(formReducer, {
    name: "",
    age: "",
  });

  // Form submit handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormData({
      type: "set",
      output: `${formData.name} is  ${formData.age} years old!`,
    });
  };

  return (
    <div>
      {/* Show the output */}
      <h1>{formData.output}</h1>

      {/* Form */}
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ type: "set", name: e.target.value })}
        />

        <input
          type="number"
          min="0"
          max="90"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ type: "set", age: e.target.value })}
        />
        
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormEx;
