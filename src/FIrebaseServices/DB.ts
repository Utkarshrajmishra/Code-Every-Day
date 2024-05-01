import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
class DB{
  
   async addProfile(email:string,userData:any)
    {
    
        await setDoc(doc(db,"userInfo",email),userData)
        .then((res)=>{
            return true;
        })
        .catch((error)=>{
            return error.message
        })
       
    }

    

    async addDate(email:string)
    {
        const dates={}
        await setDoc(doc(db,"problemDates",email),dates)
    }
}

const dbService=new DB();
export default dbService;