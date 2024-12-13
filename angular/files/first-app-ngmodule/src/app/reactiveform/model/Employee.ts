export class EmployeeModel{
    empId: number;
    name: string;
    city: string;
    state: string;
    emailid: string;
    contactno: string;
    address: string;
    pincode: number;

    constructor(){
        this.empId = 0;
        this.name = "";
        this.city = "";
        this.state = "";
        this.emailid = "";
        this.contactno = "";
        this.address = "";
        this.pincode = 0;
    }
}