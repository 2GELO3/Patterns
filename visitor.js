// Паттерн Посетитель(Суть данного паттерна заключается в том, что он добавляет новую функциональность уже существующим классам, причём делает Посеитель это, неизменяя исходный код классов) P.S. Другими словами, он расширяет функциональность класса, неизменяя его первоначальную реализацию

class Auto {
  // Метод accept осуществляет связь класса с внешним миром
  accept(visitor) {
    visitor(this);
  }
}

class Tesla extends Auto {
  info() {
    return 'It is a Tesla car!';
  }
};

class Bmw extends Auto {
  info() {
    return 'It is a BMW car!';
  }
};

class Audi extends Auto {
  info() {
    return 'It is a Audi car!';
  }
};

// Описываем Посетителя
function exportVisitor(auto) {
  if (auto instanceof Tesla)
    auto.export = console.log(`Exported data: ${auto.info()}`);
  if (auto instanceof Bmw)
    auto.export = console.log(`Exported data: ${auto.info()}`);
  if (auto instanceof Audi)
    auto.export = console.log(`Exported data: ${auto.info()}`);
};

// Проверяем(Создаём два инстанса классов после чего с помощью паттерна Посетителя, добавили в каждый из объектов метод export и вызвали его получив соответствующий результат в консоли)
const tesla = new Tesla();
const bmw = new Bmw();
const audi = new Audi();

console.log(tesla.accept(exportVisitor));

console.log(bmw.accept(exportVisitor));

console.log(audi.accept(exportVisitor));

// Вывод: Паттерн Посетитель помогает расширить возможности существующих классов, неизменяя их исходный и имплементацию