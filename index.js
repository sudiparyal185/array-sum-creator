const arraySum = (array = []) => {
  return array.reduce((a, b) => a + b, 0);
};

module.exports = {
  arraySum,
};
