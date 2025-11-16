class BankAccount {
  #balance; // private property (hidden from outside)

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  // Public method - visible to the user
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`${this.owner} deposited $${amount}`);
    }
  }

  // Public method - also visible
  getBalance() {
    console.log(`Current balance: $${this.#balance}`);
  }
}

const user1 = new BankAccount("Ahmed", 500);
user1.deposit(200);    // Ahmed deposited $200
user1.getBalance();    // Current balance: $700

console.log(user1.#balance); // Error: Private field '#balance' must be declared in an enclosing class