function BankAccount(accountNumber,accountHolderName,balance){
    this.accountNumber=accountNumber;
    this.accountHolderName=accountHolderName;
    this.balance=balance;

    this.deposit=function(amount){
        if(amount <=0){
            return "ernter the positive number";
        }
        this.balance +=amount;
    };

    this.withdraw=function(amount){
        if(amount >= this.balance){
            return "insufficient balance";
        }
        this.balance -=amount;
    };

    this.getBalance=function(){
        return this.balance;
    };

    this.displayAccountInfo=function(){
        console.log(`Account: ${this.accountNumber}, Holder: ${this.accountHolderName}, Balance: ${this.balance}`);
    };
}

const Customer1=new BankAccount("SBI123","John",1500);
const Customer2=new BankAccount("SBI234","Jane",2500);