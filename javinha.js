//  if (1 === "1") {
//     console.log("igual")
//  } else {
//     console.log("diferente")
//  }

// let opcao = 4


// switch (opcao) {
//     case 1:
//     console.log("Case1");
//     break;
//     case 2:
//     console.log("Case2")
//     break;

//     default:
//         console.log("Valor padrão")
//         break;
// } 

let voto = prompt("escolha um candidato (1-joao / 2-pedro / 3-maria");

switch(voto){
    case 1:
        alert("votou no joao")
        break;
    case 2:
        alert("votou no pedro")
        break;
    case 3:
        alert("votou na maria")
        break;
    default:
        alert("numero invalido")
        break;
}