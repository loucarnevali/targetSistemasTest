// string a ser invertida
let stringNormal = prompt("Digite uma palavra ou uma frase: ");

// convertendo a string em um array
let arr = stringNormal.split("");

// invertendo o array usando um loop
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}

// convertendo o array de volta para uma string
let reversedStr = arr.join("");

// exibindo a string invertida
window.alert(`O que você digitou de trás pra frente: ${reversedStr}`);

// console.log(stringNormal);
// console.log(reversedStr);
