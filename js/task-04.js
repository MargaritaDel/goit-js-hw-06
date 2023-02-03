// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

let value = document.querySelector("#value");
const decrementBth = document.querySelector('button[data-action="decrement"]');
const incrementBth = document.querySelector('button[data-action="increment"]');

decrementBth.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

incrementBth.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
