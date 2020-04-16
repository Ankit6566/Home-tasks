export class User{
    public id: string;
    public firstName: string;
    public lastName: string;
    public age: Number;
    isDeleted:boolean;

    constructor(id,firstname,lastname,age,isDeleted){
        this.id=id;
        this.firstName=firstname;
        this.lastName=lastname;
        this.age=age;
        this.isDeleted=isDeleted;
    }
}