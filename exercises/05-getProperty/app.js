function getProperty(obj, key) {
  return obj[key];
}
var car = {model: "Toyota"};
var model = "model"
console.log(getProperty(car,model));