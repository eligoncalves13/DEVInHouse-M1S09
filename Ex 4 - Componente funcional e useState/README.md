# Ex 4 - Componente funcional e useState

Crie um componente com um estado “aceso” inicializado como false. Com uma única função, crie a funcionalidade de troca do estado “aceso” entre true e false (função toggler). 

Como bônus, tente fazer com que o texto do botão também mude conforme o estado (por exemplo, se aceso = true, o texto fica “apagar”; se aceso = false, o texto fica “acender”).

Segue abaixo um exemplo de implementação do componente

    <div
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: aceso ? "#ffee00" : "#000",
      }}
    >
      <button onClick={}>Mudar</button>
    </div>

____

## 🖥️ Getting started

- clone the repo and access the folder
- install the dependencies
- run `npm run start` or `yarn run start`.

