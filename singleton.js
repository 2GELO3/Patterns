// Нужен тогда, когда в системе нужен объект в едином экземпляре и к которому может быть доступ из разных частей программы(В JS все объекты являются singleton-ами) P.S. Является пораждающим паттерном

// 1 способ
// Объявляем singleton(переменную instance) глобально(Считается плохим тоном)
// let instance;

// class Counter {
//   constructor() {
//     if (!instance) instance = this;
//     instance.count = 0;
//     return instance;
//   }

//   getCount() {
//     return instance.count;
//   }

//   increaseCount() {
//     return instance.count++;
//   }

// };

// const myCount1 = new Counter(),
//   myCount2 = new Counter()

// myCount1.increaseCount();
// myCount1.increaseCount();
// myCount2.increaseCount();
// myCount2.increaseCount();

// console.log(myCount2.getCount());
// console.log(myCount1.getCount());

// 2 способ


class Counter {
  constructor() {
    if (typeof Counter.instance === 'object') {
      return Counter.instance;
    }
    this.count = 0;
    Counter.instance = this;
    return this;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    return this.count++;
  }

};

const myCount1 = new Counter();
const myCount2 = new Counter();


myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();

console.log(myCount2.getCount());
console.log(myCount1.getCount());