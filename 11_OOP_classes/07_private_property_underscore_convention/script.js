class Wallet {
  constructor() {
    this._balance = 0;
    this._transaction = [];
  }

  deposit(amount) {
    this._processDeposit(amount);
    this._balance += amount;
  }

  withdrawl(amount) {
    if (this.balance < amount) {
      console.log("Not enough funds");
      return;
    }
    this._processWithdrawl(amount);
    this._balance += amount;
  }

  _processDeposit(amount) {
    console.log(`Depositing ${amount}`);
    this._transaction.push({
      type: "deposit",
      amount,
    });
  }
  _processWithdrawl(amount) {
    console.log(`Withdrawing ${amount}`);
    this._transaction.push({
      type: "withdraw",
      amount,
    });
  }

  get balance() {
    return this._balance;
  }

  get transaction() {
    return this._transaction;
  }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdrawl(200);
console.log(wallet.balance);
console.log(wallet.transaction);
