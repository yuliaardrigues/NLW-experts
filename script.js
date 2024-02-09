const perguntas = [
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: ["let myVar", "const myVar", "var myVar"],
    correta: 2,
  },
  {
    pergunta:
      "Qual é o operador lógico que representa a igualdade estrita em JavaScript?",
    respostas: ["==", "===", "="],
    correta: 1,
  },
  {
    pergunta:
      "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
    respostas: ["push()", "pop()", "concat()"],
    correta: 0,
  },
  {
    pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
    respostas: ["32", "5", "'32'"],
    correta: 2,
  },
  {
    pergunta:
      "Como você acessaria o terceiro elemento de um array chamado 'myArray' em JavaScript?",
    respostas: ["myArray[2]", "myArray[3]", "myArray[1]"],
    correta: 0,
  },
  {
    pergunta:
      "Qual função é usada para converter uma string em um número em JavaScript?",
    respostas: ["parseInt()", "toString()", "parseFloat()"],
    correta: 0,
  },
  {
    pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
    respostas: [
      "Retorna o tipo de uma variável",
      "Compara dois valores",
      "Converte uma string em minúsculas",
    ],
    correta: 0,
  },
  {
    pergunta: "O que o método 'map()' faz em um array em JavaScript?",
    respostas: [
      "Filtra os elementos do array",
      "Modifica todos os elementos do array",
      "Cria um novo array com os resultados de uma função aplicada a cada elemento",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual é o resultado da expressão '10 % 3' em JavaScript?",
    respostas: ["3", "1", "0"],
    correta: 1,
  },
  {
    pergunta:
      "Como você chamaria uma função 'myFunction' após 2 segundos em JavaScript?",
    respostas: [
      "setTimeout(myFunction, 2000)",
      "setInterval(myFunction, 2000)",
      "sleep(2000, myFunction)",
    ],
    correta: 0,
  },
]

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")


const respostas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos span");

for (const item of perguntas) {
  // alert(item.pergunta);
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector("h3").textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = resposta
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta" + perguntas.indexOf(item)
    );
    dt.querySelector("input").value = item.respostas.indexOf(resposta)
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = respostas.size + "de" + totalDePerguntas
    }

    quizItem.querySelector("dl").appendChild(dt)
  }

  quizItem.querySelector("dl dt").remove()
  quiz.appendChild(quizItem)
}
