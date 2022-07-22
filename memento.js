// Паттерн Снимок - это поведенческий паттерн, который позволяет сохранять и востанавливать предыдущие состояния объекта(Другими словами, данный шаблон помогает сохранять предыдущие состояния объекта даже после того, как он изменился и востанавливать это состояние в случае необходимости)

// Создаём объект хранитель
class Memento {
  constructor(value) {
    this.value = value;
  }
};

const creator = {
  save: val => new Memento(val),
  restore: memento => memento.value,
};

// Описываем класс который будет хранит все предыдущие состояния, а также содержать методы по сохранению и востановлению снимка
class Caretaker {
  constructor() {
    this.values = [];
  }

  // Делаем снимок текущих данных и сохраняем его
  addMemento(memento) {
    this.values.push(memento);
  }

  // Обращаемся к тому или иному элементу массива и возвращаем его
  getMemento(index) {
    return this.values[index];
  }
};

// Проверяем(Создаём экземпляр хранитель)
const careTaker = new Caretaker();

careTaker.addMemento(creator.save('hello'));
careTaker.addMemento(creator.save('hello world'));
careTaker.addMemento(creator.save('hello world!!!'));

console.log(creatir.restore(careTaker.getMemento(1)));

