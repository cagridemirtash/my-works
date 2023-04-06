class NameField {
  constructor(name) {
    const field = document.createElement("li");
    field.textContent = name;
    const nameListHook = document.querySelector("#names");
    nameListHook.appendChild(field);
  }
}

class NameGenerator {
  constructor() {
    const btn = document.querySelector("button");
    this.names = ["Çağrı", "Dilara" ,"Beyza", "Deniz", "Ömer"];
    this.currentNameIndex = 0;
    btn.addEventListener("click", this.addName.bind(this));
  }

  addName() {
    console.log(this);
    const name = new NameField(this.names[this.currentNameIndex]);
    this.currentNameIndex++;
    if (this.currentNameIndex >= this.names.length) {
      this.currentNameIndex = 0;
    }
  }
}

new NameGenerator();
