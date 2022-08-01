import {User} from "./user";
export class Manager_user{
    static manageruser:User[]=[]
    showAll():User[]{
        return Manager_user.manageruser
    }
    addUser(user:User){
         Manager_user.manageruser.push(user);
    }
    check(email:string,password:string):boolean {
        let flag = false;
        for (let i = 0; i < Manager_user.manageruser.length; i++) {
            if(Manager_user.manageruser[i].email === email && Manager_user.manageruser[i].password === password){
                flag = true;
            }
        }return flag;
    }

}