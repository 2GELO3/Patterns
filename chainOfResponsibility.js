// Паттерн Цепочка обязанностей - это поведенческий паттерн, который позволяет передовать запросы последовательно по цепочке обработчиков(Причём его особенность в том, что каждый последующий обработчик решает задачу того, может ли он сам обработать запрос либо его нужно передать дальше по цепочке)

class Account {
  // Объект pay на вход принимает транзакцию оплаты и прогоняет её через условие(Если так подумать, то объект pay - это своеобразная рекурсия)
  pay(orderPrice) {
    if (this.canPay(orderPrice)) {
      console.log(`Paid ${orderPrice} using ${this.name}`);
    } else if (this.incomer) {
      console.log(`Cannot pay using ${this.name}`);
      this.incomer.pay(orderPrice)
    } else {
      console.log('Unfortunately, not enough money');
    }
  }

  // Данный метод сравнивает поступающее значение транзакции на оплату с текущим значением баланса
  canPay(amount) {
    return this.balance >= amount;
  }

  // Метод setNext создаёт преемника(Тоесть внутрь одного объекта помещается другой)
  setNext(account) {
    this.incomer = account;
  }

  // Метод show проверяет цепочку приемников
  show() {
    console.log(this);
  }
};


// Создаём объекты платёжных систем
class Master extends Account {
  constructor(balance) {
    super();
    this.name = 'Master Card';
    this.balance = balance;
  }
};

class Paypal extends Account {
  constructor(balance) {
    super();
    this.name = 'Paypal';
    this.balance = balance;
  }
};

class Qiwi extends Account {
  constructor(balance) {
    super();
    this.name = 'Qiwi';
    this.balance = balance;
  }
};

// Проверяем работу цепочки

// Задаём баланс для всех трёх счетов
const master = new Master(100);
const paypal = new Paypal(200);
const qiwi = new Qiwi(500);

// Создаём цепочку ответственности или цепочку приемников
master.setNext(paypal);
paypal.setNext(qiwi);

// Создаём платёжный счёт
// master.pay(438);

master.show();

// Итого: Паттерн Цепочка ответственностей помогает создать абсолютно любые цепочки для обработки поступающих данных и в случае невозможности обработки этих данных на одном уровне, они могут быть переданы на следующие, пока не будут корректно обработаны(Сами цепочки способны довольно гибко конфигурироваться)