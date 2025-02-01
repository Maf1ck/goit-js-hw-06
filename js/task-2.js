class Storage {
  #items;

  constructor(items) {
    this.#items = [...items]; 
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    const index = this.#items.indexOf(itemToRemove);
    if (index !== -1) {
      this.#items.splice(index, 1); 
    }
  }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log("Початкові елементи:", storage.getItems()); 
// ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log("Після додавання Droid:", storage.getItems()); 
// ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log("Після видалення Prolonger:", storage.getItems()); 
// ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scanner");
console.log("Спроба видалити відсутній Scanner:", storage.getItems()); 
// ["Nanitoids", "Antigravitator", "Droid"]
