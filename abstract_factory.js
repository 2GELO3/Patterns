// Абстрактная фабрика - это паттерн, который создаёт интерфейс, группирующий другие фабрики, которые логически связаны друг с другом(Надстройка над другими фабриками) P.S. У "обычных" фабрик должен быть одинаковый интерфейс, чтобы им можно было управлять(Не привязывается к классам конкретного объекта)

// Создаём абстрактную фабрику
function bmwProducer(kind) {
  return kind === 'sport' ? sportCarFactory : familyCarFactory;
};

// Фабрики
function sportCarFactory() {
  return new Z4();
}

function sportCarFactory() {
  return new I3();
}

class Z4 {
  info() {
    return "Z4 is a Sport car!"
  }
};

class I3 {
  info() {
    return "I3 is a Family car!"
  }
};

// Инициализируем Абстрактную фабрику(спортивные авто)
const produce = bmwProducer('sport');

// Автомобильное производство(Фабрика)
const myCar = new produce();

console.log(myCar.info());
