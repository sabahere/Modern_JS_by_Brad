class Wallet {
  #balance = 0;
  #transaction = [];

  deposit(amount) {
    this.#processDeposit(amount);
    this.#balance += amount;
  }
  withdrawl(amount) {
    if (this.#balance < amount) {
      console.log("Not enough fund");
      return;
    }
    this.#processWithdrawl(amount);
    this.#balance -= amount;
  }

  #processDeposit(amount) {
    console.log(`Depositing ${amount}`);
    this.#transaction.push({
      type: "deposit",
      amount,
    });
  }
  #processWithdrawl(amount) {
    console.log(`Withdrawing ${amount}`);
    this.#transaction.push({
      type: "withdraw",
      amount,
    });
  }

  get balance() {
    return this.#balance;
  }

  get transaction() {
    return this.#transaction;
  }
}

const wallet = new Wallet();
wallet.deposit(100);
wallet.withdrawl(50);
console.log(wallet.transaction);
