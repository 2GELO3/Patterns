// Паттерн Шаблон - это поведенческий паттерн, который определяет базовые шаги исполнения алгоритма и выполнение каждого из этих шагов делегирует на соответствующие методы или подклассы со своей специализированной логикой имплементацией

// Создаём корневой класс в котором определён порядок выполнения операций
class Builder {
  // Описываем Шаблон
  build() {
    this.addEngine();
    this.installChassis();
    this.addElectronic();
    this.collectAccessories();
  }
};

// Создаём два класса в котором одни и теже методы, но разная реализация этих самых методов
class TeslaBuilder extends Builder {
  addEngine() {
    console.log('Add Electronic Engine');
  }

  installChassis() {
    console.log('Install Tesla chassis');
  }

  addElectronic() {
    console.log('Collect Accessories');
  }

  collectAccessories() {
    console.log('Collect Accessories');
  }
};

class BmwBuilder extends Builder {
  addEngine() {
    console.log('Add BMW Engine');
  }

  installChassis() {
    console.log('Install BMW chassis');
  }

  addElectronic() {
    console.log('Add electronic');
  }

  collectAccessories() {
    console.log('Collect Accessories');
  }
};

// Проверяем реализацию
const teslaBuilder = new TeslaBuilder();
const bmwBuilder = new BmwBuilder();

teslaBuilder.build();
bmwBuilder.build();

// Итого: Шаблоный метод - это паттерн, который определяет шаблонное выполнение алгоритмов имеющих одинаковый интерфейс взаимодействия, но различную внутреннию имплементацию