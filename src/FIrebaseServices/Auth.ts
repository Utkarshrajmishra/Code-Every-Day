import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateEmail,
  deleteUser,
  sendEmailVerification,
} from 'firebase/auth';

class AuthService {
  auth;
  constructor() {
    this.auth = getAuth();
  }

  createUser(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((user) => {
        return true;
      })
      .catch((error) => {
        return error.message;
      });
  }

  logInUser(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((user) => {
        return true;
      })
      .catch((error) => {
        return error.message;
      });
  }

  getCurrentUser() {
    const user = this.auth.currentUser;
    if (user) {
      return user;
    } else {
      return false;
    }
  }

  
//   sendVerificationLink() {
//         if(this.auth.currentUser)
//             {
//                 sendEmailVerification(this.auth.currentUser)
//                 .then(()=>{
                    
//                 })
//             }
//   }

  updatePassword(email: string) {
    sendPasswordResetEmail(this.auth, email)
      .then(() => {
        return true;
      })
      .catch((error) => {
        return error.message;
      });
  }

  updateEmail(newEmail: string) {
    if (this.auth.currentUser) {
      updateEmail(this.auth.currentUser, newEmail)
        .then(() => {
          return true;
        })
        .catch((error) => {
          return error.message;
        });
    } else {
      return false;
    }
  }

  deleteUser(){
    if(this.auth.currentUser)
        {
            deleteUser(this.auth.currentUser)
            .then(()=>{
                return true;
            })
            .catch((error)=>{
                return error.message;
            })
        }
  }

 

  

}

const authService = new AuthService();
export default authService;
