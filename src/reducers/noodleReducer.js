const noodleReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "NOODLE_ADD":
      return [...state, ...payload];
    case "NOODLE_LIST":
      return [...state];
    case "NOODLE_BY_ID":
      return [...state.filter((item) => item.id === payload.id)];
    case "NOODLE_BY_BRAND":
      return { filtered: [...state.filter((item) => item["Brand"].toLowerCase().includes(payload.brand.toLowerCase()))] }
    default:
      return state;
  }
};

export default noodleReducer;