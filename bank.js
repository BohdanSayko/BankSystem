class BankAccount {
	constructor(accountHolder) {
  	this.balance = 0;
    this.accountHolder = accountHolder;
  }
  
  getBalance() {
  	alert("Your balance: " + this.balance);
  }
  
  deposit(amount) {
    if(amount >= 0){
    	this.balance += amount;
      alert("Opreration is successful, your balance is replenish by " + amount);
    }else{
    	alert("Wrong deposit!");
    }  
  }
	
  withdraw(amount) {    
   if(this.balance >= amount && amount >= 0){
    	this.balance -= amount;
      alert("Opreration is successful, " + amount + " has been deducted from your balance");
    }else{
    	alert("Ther are not enough funds in your balance!");
    }
  }
  
}

const Bohdan = new BankAccount("Bohdan");

let amountDeposit  = +prompt("Enter the amount of the deposit: ")
Bohdan.deposit(amountDeposit);

let amountWithdraw = +prompt("Enter how much you want to withdraw: ")
Bohdan.withdraw(amountWithdraw);

Bohdan.getBalance();
