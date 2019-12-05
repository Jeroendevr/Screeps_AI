const utils = {
  range: (start, end, length = end - start) => Array.from({ length }, (_, i) => start + i)
};

module.exports = utils;
