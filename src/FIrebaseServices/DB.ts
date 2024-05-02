import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
class DB{
  
   async addProfile(email:string,userData:any)
    {
    
        await setDoc(doc(db,"userInfo",email),userData)
        .then((res)=>{
            this.addDate(email);
            return true;
        })
        .catch((error)=>{
            return error.message
        })
       
    }

    

    async addDate(email:string)
    {
        let currentDate=new Date();
        let datesObject:any={};
        for(let i=0;i<30;i++){
            let dateKey=new Date(currentDate).toLocaleDateString();
            datesObject[i]=dateKey;
        }
        await setDoc(doc(db,"UserDates",email),datesObject);
    }
}

const dbService=new DB();
export default dbService;