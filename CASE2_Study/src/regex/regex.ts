export class regex{
    public checkEmail:RegExp = /^[a-z]\S[a-z0-9_\.]{5,32}@[gmail]{5}(\.[a-z0-9]{2,4}){1,2}$/
    public checkPassword:RegExp = /^[A-Z]\w{5,12}\$/
    public checkE(email:string):boolean{
        return this.checkEmail.test(email)
    }
    public checkP(password:string):boolean{
        return  this.checkPassword.test(password)
    }
}