import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebaseConfig";

class AuthService {
  static async register(email: string, password: string, username: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Firestoreにユーザー情報を保存
      await setDoc(doc(db, "users", user.uid), {
        email,
        username,
      });

      return user;
    } catch (error) {
      console.error("登録失敗:", error);
      throw error;
    }
  }

  static async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Firestoreからユーザー名を取得
      //db: Firestoreのインスタンス
      //users:コレクション名（firestoreみればわかる）
      //user.uid:ユーザー固有のid
      //getDoc:スナップショットの取得（取得時点のデータを静的保持する、取得後firestoreのデータが変わってもスナップショットの内容は変わらない）
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const username = userDoc.exists() ? userDoc.data()?.username : "ゲスト";

      return { user, username };
    } catch (error) {
      console.error("ログイン失敗:", error);
      throw error;
    }
  }
}

export default AuthService;
