class Calculator {
  constructor() {}

  beregn() {
    const tal1 = parseFloat(this.getTal1());
    const regnetegn = this.getRegnetegn();
    const tal2 = parseFloat(this.getTal2());

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
        if (tal2 === 0) {
          resultat = "Error: Division med 0";
        } else {
          resultat = tal1 / tal2;
        }
        break;
      case "^":
        resultat = Math.pow(tal1, tal2);
        break;
      case "rt":
        resultat = Math.pow(tal1, 1 / tal2);
        break;
      default:
        resultat = "Ugyldigt regnetegn";
    }

    return resultat;
  }

  getTal1() {
    return document.getElementById("tal1").value;
  }

  getRegnetegn() {
    return document.getElementById("regnetegn").value;
  }

  getTal2() {
    return document.getElementById("tal2").value;
  }
}

const calculator = new Calculator();

const beregnKnapp = document.getElementById("beregnKnapp");

beregnKnapp.addEventListener("click", function() {
  const resultat = calculator.beregn();

  const resultatElement = document.getElementById("resultat");
  resultatElement.innerHTML = "Resultat: " + resultat;
});