//object
const motorCycle = {
  name: 'Kawasaki',
  color: 'red',
  speed: 636,
};

console.log(motorCycle);
motorCycle.color = 'white';
console.log(motorCycle);

//class
class car {
  name;
  color;
  speed;

  constructor({ name, color, speed }) {
    this.name = name;
    this.color = color;
    this.speed = speed;
  }

  run() {
    console.log(this.name + ' sedang melaju');
  }
}

const kendaraan = new car({
  name: 'Toyota',
  color: 'blue',
  speed: 1000,
});

kendaraan.run();

//best practice
const car = {
  name: 'Honda Civic',
  model: 'Sedan',
  speed: 200,
  color: 'red',
  year: 2000,
};

function getCar(car = {}) {
  if (Object.keys(car).length === 0) throw Error('Car is required');
  return car;
}
