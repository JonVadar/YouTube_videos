// ID tracker
let nextId = 2;

export const postsReducer = (state, action) => {
  switch (action.type) {
    // Add a new object to posts array and return the new array
    case "add":
      return [...state, { id: nextId++, title: action.title, likes: 0 }];

    // Return a new array with all the posts except the deleted one
    case "delete":
      return state.filter((p) => p.id !== action.id);

    // Return a new array with the updated post property
    case "like":
      return [
        ...state.filter((p) =>
          p.id === action.id ? (p.likes = p.likes + 1) : p
        ),
      ];

    // Return state as is
    default:
      state;
  }
};
