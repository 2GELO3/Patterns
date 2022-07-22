// Паттерн мост - это порождающиц паттерн, который разделяет один или несколько классов на несколько отдельных иерархий, которые называются Абстракцией(Abstraction) и Реализацией(Implementor), что в свою очередь помогает изменять их без зависимостей друг от друга(Abstraction - интерфейс взаимодействия, который сам не выолняет, а делегирует управление в реализацию. Implementor - объект, в котором описанна непосредственно сама реализация) P.S. Паттерн Мост нужен для разделения неприкасающихся фунциональностей в одном классе(Воизбежании зависимостей), позволяет поместить всю реализацию в классы Abstraction и Implementor


// Создаём классы для наследования определённой моделью конкретного цвета
class Model {
  constructor(color) {
    this.color = color;
  }
};

// Класс Color как раз таки и является мостом в данной конструкции
class Color {
  constructor(type) {
    this.type = type;
  }
  get() {
    return this.type;
  }
};

// Создаём классы цветов
class BlackColor extends Color {
  constructor() {
    super("dark-black");
  }
};

class SilbrigColor extends Color {
  constructor() {
    super("Silbermetallic");
  }
};

// А теперь создаём модели(Сами модели с цветами не работают, единственное что у них есть это paint, в котором идёт не прямое взаимодействие с цветом, а делегирование работы на класс Color, в котором как раз таки и описан метод get)
class Audi extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Audi, Color: ${this.color.get()}`;
  }
};

class Bmw extends Model {
  constructor(color) {
    super(color);
  }
  // Метод paint - покраска
  paint() {
    return `Auto: Bmw, Color: ${this.color.get()}`;
  }
};

// Создаём авто
const blackBmw = new Bmw(new BlackColor());

console.log(blackBmw.paint());
