const button = document.querySelector(".button");
const total = document.querySelector(".total");

let interestRate = 18.5;

const deposit = "30000";

const growth = "150";

const currency = "руб";

button.addEventListener("click", () => {
  const sum = document.querySelector(".sum").value;
  let sumRate = sum * 0.07;
  total.textContent =
    "Через год у вас будет " + (Number(sum) + sumRate) + " руб. на счету";

  // message
  // ", где вместо ХХХ выведите сколько получится на счету с учетом процентной ставки 7% годовых
});

// console.log("Ваш депозит на начало расчётного периода составлял " + deposit + " " + currency + ".")

// console.log(`Ваш депозит на начало расчётного периода составлял ${deposit} ${currency}.`)

// console.log(`Согласно вашему тарифу, вам была присвоена ставка ${interestRate}% `)

// console.log(`К концу расчётного периода прирост составил ${growth} ${currency}, и на данный момент ваш депозит составляет ${Number(deposit)+Number(growth)} руб.`)

// // “Ваш депозит на начало расчётного периода составлял 30000 руб.”
// “Согласно вашему тарифу, вам была присвоена ставка 18.5%”
// “К концу расчётного периода прирост составил 150 руб., и на данный момент
// // ваш депозит составляет 30150 руб.”
