// Паттерн Состояние = это поведенческий паттерн, который позволяет менять объектам своё поведение в зависимости от состояния(Ключевой момент в том, что программа может находится в одном из нескольких состояний и в зависимости от этого, программа может, на одно и тоже событие, реагировать по разному) P.S. Переход между этими состояниями может быть как ручным(управляемым), так и автоматическим, когда в зависимости от того или иного условия включаются следующие состояния

// Создаём базовый класс заказа
class OrderStatus {
  constructor(name, nextStatus) {
    this.name = name;
    this.nextStatus = nextStatus;
  }

  next() {
    return new this.nextStatus();
  }
};

// Создаём шаги доставки

// Оплата
class WaitingForPayment extends OrderStatus {
  constructor() {
    super('waitingForPayment', Shipping);
  }
};

// Нахождение заказа в пути
class Shipping extends OrderStatus {
  constructor() {
    super('shipping', Delivered);
  }
};

// Доставка заказчику
class Delivered extends OrderStatus {
  constructor() {
    super('delivered', Delivered);
  }
};

// Определяем объект заказа(Здесь же определяем Состояние)
class Order {
  constructor() {
    this.state = new WaitingForPayment();
  }

  nextState() {
    this.state = this.state.next();
  }

  // Добавляем функционал отмены заказа
  cancelOrder() {
    this.state.name === 'waitingForPayment' ? console.log('Order is canceled!') : console.log('Order can not be canceled!');
  }
};

// Проверяем реализацию
const myOrder = new Order();

console.log(myOrder.state.name);

myOrder.nextState();
console.log(myOrder.state.name);

myOrder.nextState();
console.log(myOrder.state.name);

// Итого: Состояние - это шаблон, который помогает изменять поведение класса в зависимости от его состояния, тем самым создавая разные реакции на одни и теже данные, внутри одного класса