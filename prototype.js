// Это порождающий паттерн, который позволяет копировать объекты не вдаваясь в подробности их реализации(Создаёт клоны под определённую задачу с минимальными затратами памяти) P.S. В случае необходимости можно модифицировать каждый экземпляр точечно(под определённые нужды), неизменяя базовой структуры

// Создаём экземпляр класса
const prototypeCar = new TeslaCar('S', 80000, 'black', false);

const car1 = prototypeCar.produce()
const car2 = prototypeCar.produce()
const car3 = prototypeCar.produce()

car1.interior = 'white';
car1.autopilot = true;

class TeslaCar {
  constructor(model, price, interior, autopilot) {
    this.model = model;
    this.price = price;
    this.interior = interior;
    this.autopilot = autopilot;
  }

  // Возвращаем функцию конструктор(Клонируем объект)
  produce() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
  }
}