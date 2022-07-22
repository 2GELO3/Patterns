// Паттерн Посредник - это поведенческий паттерн, который позволет уменьшить взаимосвзь классов между собой, вынося межклассовые связи, в так называемый класс Посредник(Другими словами Mediator содержит в себе связи между различными элементами, ну или классами, что позволяет инкапсулировать специфическую логику и переиспользовать компоненты)

// Создаём класс Посредник
class OfficialDealer {
  constructor() {
    this.customers = [];
  }

  orderAuto(customer, auto, info) {
    const name = customer.getName();

    console.log(`Order name: ${name}. Order auto is ${auto}`);
    console.log(`Additional info: ${info}`);
    this.addToCustomersList(name);
  }
  addToCustomersList(name) {
    this.customers.push(name);
  }

  getCustomerList() {
    return this.customers;
  }
};

// Создаём класс клиента
class Customer {
  constructor(name, dealerMediator) {
    this, name = name;
    this.dealerMediator = dealerMediator;
  }

  getName() {
    return this.name;
  }

  makeOrder(auto, info) {
    this.dealerMediator.orderAuto(this, auto, info);
  }
};

//  Проверяем Посредника на работоспособность
const mediator = new OfficialDealer();

const oleg = new Customer('Oleg', mediator);
const valera = new Customer('Valera', mediator);

oleg.makeOrder('Tesla', 'With autopilot');
valera.makeOrder('Audi', 'With parktronik');

console.log(mediator.getCustomerList());

// Итого: Mediator нужен для того, чтобы уменьшить связанность классов между собой и который устанавливает все необходимые связи только внутри себя. Благодаря этому переиспользованность классов увеличивается в разы