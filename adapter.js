// Данный паттерн оборачивает несовместимый с чем-то объект и делает его совместимым, не изменяя исходный код объекта P.S. Adapter - это структурный паттерн, который оборачивает объект с уникальным или специфическим внутренним устройством и подгоняет его под использование в уже стандартизированной системе классов, тоесть адаптирует его специфические свойства и методы под уже использующиеся, что позволяет объектам с несовместимыми интерфейсами работать вместе

class Engine2 {
  simpleInterface() {
    console.log('Engine 2.0 - tr-tr-tr');
  }
};

class EngineV8 {
  complecatedInterface() {
    console.log('Engine V8! - wroom wroom!');
  }
};

// Создаём адаптер
class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine;
  }

  simpleInterface() {
    this.engine.complecatedInterface();
  }
};

// Для проверки создадим класс нашего авто
class Auto {
  startEngine(engine) {
    engine.simpleInterface()
  }
};

// Создаём экземпляр нашего авто
// const myCar = new Auto();
// const oldEngine = new Engine2();

// myCar.startEngine(oldEngine);

const myCar = new Auto();
const engineAdapter = new EngineV8Adapter(new EngineV8());

myCar.startEngine(engineAdapter);