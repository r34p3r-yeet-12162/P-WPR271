let cars = [];
// to add
function getDetails() {
  let name = document.getElementById("vehicleName").value;
  // But is the name valid
  let year = document.getElementById("vehicleYear").value;
  // But is the year valid

  // ....

  return {
    //
  };
}

function checkValidity() {}
//
car = getDetails();
let valid = checkValidity();

function finalise() {
  if (!valid) return;
  saveDetails();
}
function saveDetails(car) {
  car.push(car);
}
