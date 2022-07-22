// Паттерн компановщик - это структурный паттерн проектирования, который позволяет сгруппировать множество объектов в древовидную структуру и работать с этой структурой так, как будто это один единственный объект(Тоесть один исходный класс содержит компоненты, которые в свою очередь также содержат компоненты) P.S. Итого: паттерн компановщик группирует множество объектов в древовидную структуру(У нас это массив equipments внутри класса Composite). Паттерн работает с вложенными методами через единый интерфейс с общим методом получения стоимости(Причём получение стоимости он нделает не самостоятельно, а вызывает соответствующие методы внутри каждого из объектов. Сам же он просто возвращает итоговый результат работы делегированных методов) Это и есть древовидная структура

// Допутим у нас есть таблица Excel и нам нужно это трансформировать в более рабочий вид(Класс конструктор)

class Equipment {
  getPrice() {
    return this.price || 0;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  setPrice(price) {
    this.price = price;
  }
};

// Оборачиваем "таблицу" в классы(Можно использовать Фабрику)
class Engine extends Equipment {
  constructor() {
    super();
    this.setName('Engine');
    this.setPrice(800);
  }
};

class Body extends Equipment {
  constructor() {
    super();
    this.setName('Body');
    this.setPrice(3000);
  }
};

class Tools extends Equipment {
  constructor() {
    super();
    this.setName('Tools');
    this.setPrice(4000);
  }
};

// Высчитываем общую стоимость оборудования
class Composite extends Equipment {
  constructor() {
    super();
    this.equipments = [];
  }

  // Добавляем оборудование
  add(equipment) {
    this.equipments.push(equipment);
  }

  // Массив цен
  getPrice() {
    return this.equipments
      .map(equipment => equipment.getPrice())
      .reduce((a, b) => a + b);
  }
}

// Тестим код выше

class Car extends Composite {
  constructor() {
    super();
    this.setName('Audi');
  }
};

const myCar = new Car();

myCar.add(new Engine());
myCar.add(new Body());
myCar.add(new Tools());

console.log(`${myCar.getName()} price is ${myCar.getPrice()}$`);
