export class User {
  id: number;
  fname: string;
  lname: string;
  email: string;
  sal:number;
  phone: number;
  address: string;
  constructor( id: number,fname: string,lname: string,email: string, sal:number,phone: number,address: string) {
    this.id=id,
    this.fname=fname,
    this.lname=lname,
    this.email=email,
    this.sal=sal
    this.phone=phone,
    this.address=address
  }
  getFullname(){
    return this.fname+" "+this.lname;
  }

  getYearlySal(){
    return this.sal*12;
  }

}
