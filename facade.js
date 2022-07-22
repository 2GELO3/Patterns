// Задача паттерна "Фасад" заключается в том, чтобы скрыть сложную логику за простым Фасадом, тоесть собрать различные сложные структуры, объединить их и выдать простой способ манипуляции P.S. Ключевая идея Facade - cкрыть под капотом "некрасивую" реализацию и предоставить удобный механизм взаимодействия


// Создаём абстрактный класс
class Conveyor {
  setBody() { console.log('Body set'); }

  getEngine() { console.log('Dismantle Engine!'); }

  setEngine() { console.log('Engine set!'); }

  setInterior() { console.log('Exterior added!'); }

  getInterior() { console.log('Update interior!'); }

  setExterior() { console.log('Added interior!'); }

  setWheels() { console.log('Wheels!'); }

  addElectronics() { console.log('Added electronics'); }

  paint() { console.log('Car painted!'); }
}

// Создаём дополнительную абстракцию
class ConveyorFacade {
  constructor(car) {
    this.car = car;
  }

  // Под действием метода assembleCar собирается авто(В общем-то это и есть Facade)
  assembleCar() {
    this.car.setBody();
    this.car.setEngine();
    this.car.setInterior();
    this.car.setExterior();
    this.car.setWheels();
    this.car.addElectronics();
    this.car.paint();
  }

  // Создаём два доп. метода, которые представляют собой демонтаж старого и установку нового оборудования
  changeEngine() {
    this.car = getEngine();
    this.car = setEngine();
  }

  changeInterior() {
    this.car = getInterior();
    this.car = setInterior();
  }
}

const conveyor = new ConveyorFacade(new Conveyor());

let car = conveyor.assembleCar();
car = conveyor.changeEngine();
car = conveyor.changeInterior();

console.log(car);