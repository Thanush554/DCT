const person={
    firstName:'John',
    lastName:'Smith',
    fullName:function(){
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person.fullName());