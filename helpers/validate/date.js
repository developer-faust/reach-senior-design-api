//(0?[1-9]|1[0-9]|2[0-3]):(0?[1-9]|[1-5]?[0-9])-(0?[1-9]|1[012])-([0-2]?[1-9]|3[01])-20\d{2}
module.exports = function (date) {
  var re = /(0?[1-9]|1[0-9]|2[0-3]):(0?[1-9]|[1-5]?[0-9])-(0?[1-9]|1[012])-([0-2]?[1-9]|3[01])-20\d{2}/;
  return re.test(date);
}