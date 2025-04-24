import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

class AuthService 
{
  static async register(email: string, password: string) 
  {
    try 
    {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } 
    catch (error) 
    {
      console.error("登録失敗:", error);
      throw error;
    }
  }

  static async login(email: string, password: string) 
  {
    try 
    {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } 
    catch (error) 
    {
      console.error("ログイン失敗:", error);
      throw error;
    }
  }
}

export default AuthService;
