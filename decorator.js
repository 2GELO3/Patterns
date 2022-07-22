// Паттерн Декоратр(С помощью данного структурного паттерна, мы можем добавлять объектам новые свойства и методы, тоесть оборачивать наш объект в этот самый класс декоратора и тем самым расширять его возможности) P.S. Суть данного паттерна в том, чтобы обернуть уже существующий класс и расширить его функциональность


// Создаём абстрактный класс
class Car {
  constructor() {
    this.price = 10000;
    this.model = 'Car';
  }

  getPrice() {
    return this.price;
  }
  getDescription() {
    return this.model;
  }
}

// На основе абстрактного класса создаём класс определённого авто
class Tesla extends Car {
  constructor() {
    super();
    this.price = 25000;
    this.model = 'Tesla';
  }
}


// Создаём два декоратера
class Autopilot {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 5000;
  }

  getDescription() {
    return `${this.car.getDescription()} with autopilot`;
  }
};


class Parktronic {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 3000;
  }

  getDescription() {
    return `${this.car.getDescription()} with parktronic`;
  }
};

class Audi extends Car {
  constructor() {
    super();
    this.price = 20000;
    this.model = 'Audi'
  }
}

let audi = new Audi();
audi = new Autopilot(audi);

console.log(audi.getPrice(), audi.getDescription());

// let tesla = new Tesla();
// tesla = new Autopilot(tesla);
// tesla = new Parktronic(tesla);

// console.log(tesla.getPrice(), tesla.getDescription());

// let tesla = new Tesla();
// tesla = new Autopilot(tesla)

// console.log(tesla.getPrice(), tesla.getDescription());
