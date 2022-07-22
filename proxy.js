// Паттерн заместитель - структурный паттерн, который вместо реальных объектов, предоставляет так скажем специальные объекты заменители(Эти объекты перехватывают вызов к оригиналам и позволяют сделать что то до или после обращения к оригинальному объекту) P.S. Proxy - это некая прослойка между запросами и оригинальными объектами к которым эти запросы обращены, нужная для доп. операций

class CarAccess {
  open() {
    console.log('Opening car door');
  }

  close() {
    console.log('Closing the car door');
  }
}

// Создаём Proxy в виде охранной системы авто

class SecuritySystem {
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log('Access denied!');
    }
  }

  authenticate(password) {
    return password === 'Ilon';
  }

  close() {
    this.door.close();
  }
};

// Создаём экземпляр объекта доступа к авто обёрнутый в нашу охранную систему
const door = new SecuritySystem(new CarAccess());

door.open('Jack'); // Неправильный пароль
door.open('Ilon'); // Правильный пароль
door.close();

// Proxy и их виды:
// Виртуальный(Аналог ленивой загрузки)
// Локирующий(Хранение истории обращений)
// Защищающий(То, что мы с вами рассмотрели)
// Кэширующий(Тоесть частичное кэширование результатов запросов клиента и управление ими)