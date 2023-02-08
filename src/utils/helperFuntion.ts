export const randomValuedArray = (length: number): Array<number> => {
  const random_valued_array: Array<number> = [];
  for (let i = 0; i < length; i++) {
    random_valued_array.push(randomNumberGenerator(9));
  }
  return random_valued_array;
};

export const randomNumberGenerator = (limit: number): number => {
  return Math.floor(Math.random() * limit) + 1;
};
