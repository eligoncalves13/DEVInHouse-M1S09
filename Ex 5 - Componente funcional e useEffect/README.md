# Ex 5 - Componente funcional e useEffect

Quando usamos o useEffect, existe um segundo parâmetro que podemos passar e que altera o seu comportamento. O que acontece com o useEffect:

A. Quando não passamos o segundo parâmetro?
B. Quando passamos um array vazio?
C. Quando passamos um array com uma variável (estado ou prop)?

____

A. Quando não passamos o segundo parâmetro, o useEffect é executado a cada renderização do componente. A renderização ocorre toda vez que alteramos um estado do componente com a função setter do useState. 

B. Quando passamos um array vazio, o useEffect é executado uma única vez na primeira renderização.  Como ele entende que não depende de nenhum valor, ele não precisa re-executar. 

C. Quando passamos um array com uma variável, o useEffect é executado toda vez que o valor da variável informada é alterado. 