// Наблюдатель - это поведенческий паттерн, который создаёт механизм подписки, позволяющий одним объектам следить за изменениями других объектов

// Создаём класс за которым будем следить
class AutoNews {
  constructor() {
    this.news = '';
    this.actions = [];
  }

  setNews(text) {
    this.news = text;
    this.notifyAll();
  }

  notifyAll() {
    return this.actions.forEach(subs => subs.inform(this));
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions = this.actions.filter(el => !(el instanceof observer));
  }
};

// Создаём два класса (будущих подписчиков)
class Jack {
  inform(message) {
    console.log(`Jack has been informed about: ${message.news}`);
  }
};

class Max {
  inform(message) {
    console.log(`Max has been informed about: ${message.news}`);
  }
};

// Проверяем всю нашу имплементацию

// Создаём инстанс новостной ленты
const autoNews = new autoNews();

// Подписываем два наших объекта наблюдателя
autoNews.register(new Jack());
autoNews.register(new Max());

// Устанавливаем новость
autoNews.setNews('New Tesla price is 40 000');

// Итого: Наблюдатель - это механизм создания слежения одного объекта за изменениями другого и реагирования на эти изменения