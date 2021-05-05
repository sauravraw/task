var a = 123;

function abc() {
  console.log("Value of a: ", a);
  var a = 345;
}
abc();

function pqr() {
  var a = 345;
  console.log("Value of a: ", a);
}
pqr();

function xyz() {
  console.log("Value of a: ", a);
}
xyz();
