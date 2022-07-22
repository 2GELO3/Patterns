// Паттерн Команда это поведенческий паттерн, который помогает инкапсулировать некоторые действия и необходимые для них данные и таким образом позволяет отделить клиента от получателя(Можно также сказать, что он превращает запросы в объекты, что позволяет передавать их как аргументы в методы)

// Создаём класс пользователя(водителя)
class Driver {
  constructor(command) {
    this.command = command;
  }

  execute() {
    this.command.execute();
  }
};

// Определяем класс двигателя
class Engine {
  constructor() {
    this.state = false;
  }

  on() {
    this.state = true;
  }

  off() {
    this.state = false;
  }
};

// Шаблон Команда - в данном примере это два класса OnStartCommand и OnSwitchOffCommand(Ключ зажигания)
class OnStartCommand {
  constructor(engine) {
    this.engine = engine;
  }

  execute() {
    this.engine.on();
  }
};

class OnSwitchOffCommand {
  constructor(engine) {
    this.engine = engine;
  }

  execute() {
    this.engine.off();
  }
};
// Проверяем нашу имплементацию
const engine = new Engine();

console.log(engine);

const onStartCommand = new OnStartCommand(engine);
const driver = new Driver(onStartCommand);
driver.execute();

console.log(engine);

// Вывод: Между интерфейсом и бизнес-логикой появляется прослойка(из паттерна Команда) в которой инкапсулированна логика уникального запроса