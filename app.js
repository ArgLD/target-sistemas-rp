// 1. Sequência de Fibonacci
function checkFibonacci() {
  const num = parseInt(document.getElementById('fibonacciInput').value);
  let a = 0, b = 1, nextTerm;
  let isFibonacci = false;

  while (a <= num) {
      if (a === num) {
          isFibonacci = true;
          break;
      }
      nextTerm = a + b;
      a = b;
      b = nextTerm;
  }

  const result = isFibonacci ? `${num} pertence à sequência de Fibonacci.` : `${num} não pertence à sequência de Fibonacci.`;
  document.getElementById('fibonacciResult').innerText = result;
}

// 2. Verificar letra 'a'
function checkLetterA() {
  const str = document.getElementById('stringInput').value;
  const count = (str.match(/a/gi) || []).length;
  const result = `A letra 'a' aparece ${count} vezes na string.`;
  document.getElementById('letterAResult').innerText = result;
}

// 3. Valor da variável SOMA
function calculateSoma() {
  let INDICE = 12, SOMA = 0, K = 1;
  while (K < INDICE) {
      K = K + 1;
      SOMA = SOMA + K;
  }
  document.getElementById('somaResult').innerText = `O valor da variável SOMA é ${SOMA}.`;
}
calculateSoma();

// 4. Completar sequência
document.getElementById('seqA').innerText = '9'+' - Lógica: Sequência de números ímpares crescentes.';
document.getElementById('seqB').innerText = '128'+' -Lógica: Cada número é o dobro do anterior.';
document.getElementById('seqC').innerText = '49'+' - Lógica: Sequência dos quadrados perfeitos (n^2), 0^2, 1^2, 2^2, ..., 6^2, 7^2.';
document.getElementById('seqD').innerText = '100'+' - Lógica: Sequência de quadrados de números pares (2^2, 4^2, 6^2, 8^2), o próximo é 10^2.';
document.getElementById('seqE').innerText = '13'+' - Lógica: Sequência de Fibonacci (soma dos dois anteriores).';
document.getElementById('seqF').innerText = '200'+' - Lógica: Observando os números, todos começam com a letra “D” quando escritos por extenso: Dois, Dez, Doze, Dezesseis, Dezessete, Dezoito, Dezenove. O próximo número que começa com a letra “D” é Duzentos.';
