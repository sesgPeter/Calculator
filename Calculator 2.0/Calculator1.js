class Calculator {
    constructor() {
      this.display = document.getElementById("display");
      this.tal1 = "";
      this.regnetegn = "";
      this.tal2 = "";
    }
  
    pressButton(tegn) {
      if (tegn === "=") {
        this.beregn();
      } else if (tegn === "C") {
        this.clear();
      } else {
        if (this.regnetegn === "") {
          this.tal1 += tegn;
        } else {
          this.tal2 += tegn;
        }
        this.display.value = this.tal1 + this.regnetegn + this.tal2;
      }
    }
  
    beregn() {
      const resultat = eval(this.tal1 + this.regnetegn + this.tal2);
      this.display.value = resultat;
      this.tal1 = resultat.toString();
      this.regnetegn = "";
      this.tal2 = "";
    }
  
    clear() {
      this.tal1 = "";
      this.regnetegn = "";
      this.tal2 = "";
      this.display.value = "";
    }
  }
  
  const calculator = new Calculator();
  
  document.addEventListener("click", function(event) {
    if (event.target.classList.contains("button")) {
      const tegn = event.target.textContent;
      if (tegn === "Clear") {
        calculator.clear();
      } else {
        calculator.pressButton(tegn);
      }
    }
  });