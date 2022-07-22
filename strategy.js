// Паттерн стратегия - это поведенческий паттерн, который определяет схожие алгоритмы и помещает их, каждый в отдельный класс, после чего между этими алгоритмами можно автоматически подключатся в ходе выполнения программы(Один нюанс: Все стратегии должны иметь одинаковый интерфейс взаимодействия)

// Реализовать стратегию можно с помощью функций первого класса(Простых). Но не стрелочных так, как эти функции всплывают и могут быть вызваны на более высоких уровнях, тоесть до своего определения
function baseStrategy(amount) {
  return amount;
};

function premiumStrategy(amount) {
  return amount * 0.85;
};

function platinumStrategy(amount) {
  return amount * 0.65;
};

// Создаём класс контекст
class AutoCart {
  constructor(discount) {
    this.discount = discount;
    this.amount = 0;
  }

  checkout() {
    return this.discount(this.amount);
  }

  setAmount(amount) {
    this.amount = amount;
  }
};

// Проверяем Стратегию на примере скидок
const baseCustomer = new AutoCart(baseStrategy);
const premiumCustomer = new AutoCart(premiumStrategy);
const platinumCustomer = new AutoCart(platinumStrategy);

baseCustomer.setAmount(50000);
console.log(baseCustomer.checkout());

premiumCustomer.setAmount(50000);
console.log(premiumCustomer.checkout());

platinumCustomer.setAmount(50000);
console.log(platinumCustomer.checkout());

// Итого: Стратегия - это паттерн, который объединяет сложные алгоритмы в классы, а затем в зависимости от условий динамически дёргает тот или иной класс, тем самым динамически заменяя их друг другом в процессе выполнения программы