// Шаблон Итератор - это поведенческий паттерн, который даёт возможность последовательно обходить элементы составных объектов не раскрывая их внутреннее представление(Ключевая идея Итератора заключается в том, чтобы вынести поведение обхода коллекции из самой коллекции в отдельный класс) P.S. Сам класс содержит два ключевых метода:
// next - перемещение на следующий элемент коллекции
// hasNext - метод проверки существования следующего элемента в коллекции и в случае если метод возвращает false, то перебор останавливается

// Создаём Итератор
// class Iterator {
//   constructor(el) {
//     this.index = 0;
//     this.elements = el;
//   }

//   next() {
//     return this.elements[this.index++];
//   }

//   hasNext() {
//     return this.index < this.elements.length;
//   }
// };

// Создаём коллекцию и выполняем её перебор
// const collection = new Iterator(['Audi', 'BMW', 'Tesla', 'Mersedes']);

// while (collection.hasNext()) {
//   console.log(collection.next());
// }

// // Создаём Итератор с объектами
class Iterator {
  constructor(el) {
    this.index = 0;
    this.keys = Object.keys(el),
      this.elements = el;
  }

  next() {
    return this.elements[this.keys[this.index++]];
  }

  hasNext() {
    return this.index < this.keys.length;
  }
};

// Создаём коллекцию с объектами и выполняем её перебор

const autos = {
  audi: { model: 'Audi', color: 'black', price: '20000' },
  bmw: { model: 'BMW', color: 'white', price: '30000' },
  tesla: { model: 'Tesla', color: 'gray', price: '40000' }
};

const collection = new Iterator(autos);

while (collection.hasNext()) {
  console.log(collection.next());
};

// Итого: Итератор - это умный перебор коллекции, без раскрытия внутреннего представления элементов(Таким образом, мы не позволяем что-то менять в наших объектач) P.S. Другими словами, мы предоставляем инструмент доступа к объектам, без возможности как-то повлиять на эти объекты