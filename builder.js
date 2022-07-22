// Строительный паттерн(Данный структурный паттерн используется для создания объектов со сложными состояниями, также он может иметь дополнительный слой абстракций - директор, который управляет несколькими строителями)

class Car {
  constructor() {
    this.autoPilot = false;
    this.parktronic = false;
    this.signaling = false;
  }
}
// Инициализируем создание экземпляра класса нашего авто(Создаём авто в базовой комплектации)
class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  // Три метода на обновление наших опций
  addAutoPilot(autoPilot) {
    this.car.autoPilot = autoPilot;
    return this;
  }

  addParktronic(parktronic) {
    this.car.parktronic = parktronic;
    return this;
  }

  addSignaling(signaling) {
    this.car.signaling = signaling;
    return this;
  }

  // В этом методе мы добавляем новый объект
  updateEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  // Метод build как раз и возвращает объект нашего укомплектованного авто
  build() {
    return this.car;
  }
};

const myNewCar = new CarBuilder()
  .addSignaling(true)
  .updateEngine('V4')
  .build();

console.log(myNewCar);

const myCar = new CarBuilder()
  .addAutoPilot(true)
  .addParktronic(true)
  .updateEngine('V8')
  .build();

console.log(myCar);