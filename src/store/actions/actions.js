export const ageUpAsync = (val) => {
  return { type: "AGE_UP", value: val };
};

// 함수를 dispatch 할수있다
export const ageUp = (val) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(ageUpAsync(val));
    }, 2000);
  };
};

export const ageDown = (val) => {
  return { type: "AGE_DOWN", value: val };
};
