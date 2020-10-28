var utils = require("./utils");

var processType = {
  date: function (element) {
    return utils.getRandomDate(element);
  },
  arr: function (element) {
    return utils.getRandFromArray(element);
  },
  val: function (element) {
    return element[0];
  },
  num: function (element) {
    return utils.rand(element[0], element[1]);
  },
  numSigned: function (element) {
    return this.num(element) * utils.getRandomSign();
  },
};

module.exports = function (data, vals = []) {
  for (var i = data.length - 1; i > -1; i--) {
    vals.unshift(processType[data[i].type](data[i].values));
  }
  return vals;
};
