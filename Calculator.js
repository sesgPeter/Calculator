
function beregn() {
  const tal1 = parseFloat(document.getElementById("tal1").value);
  const regnetegn = document.getElementById("regnetegn").value;
  const tal2 = parseFloat(document.getElementById("tal2").value);
 
 let history = [];


  let resultat;
  switch (regnetegn) {
    case "+":
      resultat = tal1 + tal2;
      break;
    case "-":
      resultat = tal1 - tal2;
      break;
    case "*":
      resultat = tal1 * tal2;
      break;
    case "/":
        resultat = tal1 / tal2;
      if(tal2==0){
        resultat = "Error: Division med 0";
      }
      break;
      case "^":
     resultat=Math.pow(tal1,tal2);
     break;
     case "rt":
      resultat=Math.pow(tal1,1/tal2);
      break;
    default:
      resultat = "Ugyldigt regnetegn";
      history.push(resultat)
  for(let e of history){
  console.log(e);
}
}

  document.getElementById("resultat").innerHTML = "Resultat: " + resultat;


}

