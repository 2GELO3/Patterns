// Фабричный метод(Используется когда нужно создать множество однотипных объектов, тоесть объекты с одинаковой структурой, но разными данными причём эти объекты могут содержать как свойства, так и методы)


// Создаём простейшую фабрику
class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class BmwFactory {
  create(type) {
    if (type === 'X5')
      return new Bmw(type, 108000, 300);
    if (type === 'X6')
      return new Bmw(type, 111000, 320)
  }
};

const factory = new BmwFactory();

const x5 = factory.create('X5');
const x6 = factory.create('X6');