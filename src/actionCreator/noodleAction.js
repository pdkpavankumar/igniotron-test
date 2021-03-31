const addNoodles = (items) => {
  return {
    type: 'NOODLE_ADD',
    payload: [...items]
  }
}

const listNoodles = () => {
  return {
    type: 'NOODLE_LIST'
  }
};

const getNoodleById = (id) => {
  return {
    type: 'NOODLE_BY_ID',
    payload: { id }
  }
};

const getNoodleByBrand = (brand) => {
  return {
    type: 'NOODLE_BY_BRAND',
    payload: { brand }
  }
};


export { addNoodles, listNoodles, getNoodleById, getNoodleByBrand };
