// Паттерн кэш - струтурный паттер который позволяет вместить, большее кол-во определённых объектов в выделенную оперативную память(Другими словами, он позволяет экономить ресурсы, разделяя общее состояние объектов между собой, вместо хранения одинаковых данных в каждом объекте) P.S. Особенности паттерна:
// Неизменность
// Создавать и манипулировать данным паттерном гораздо удобнее с помощью Фабрик

// Создаём класс Легковеса(паттерна кеш)
class Auto {
  constructor(model) {
    this.model = model;
  }
};

// Фабрика(В ней и заключается суть реализации паттерна кеш)
class AutoFactory {
  constructor(name) {
    this.models = {};
  }

  create(name) {
    let model = this.models[name];
    if (model) return model;
    console.count('model');
    this.models[name] = new Auto(name);
    return this.models[name];
  }

  getModels() {
    console.table(this.models);
  }
};

// Проверяем работоспособность Фабрики и Легковеса
const factory = new AutoFactory();

const bmw = factory.create('BMW');
const audi = factory.create('Audi');
const tesla = factory.create('Tesla');
const blackTesla = factory.create('Tesla');

console.log(factory.getModels());

// Итого: Легковес предназначается для экономии памяти, занимаемой объектами. Если объект ещё не создан, он создаёт его и помещает в свой внутрений пул. Если объект уже создан, тоесть содержится в пуле, то просто возвращает ссылку на него