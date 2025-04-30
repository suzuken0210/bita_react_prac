import { useState } from "react";
import AuthService from "./AuthService";


interface LoginFormProps 
{
  setUsername: (username: string) => void;
}

//FC:関数コンポーネントの型を指定するための型エイリアス
//React.FCはReactの関数コンポーネントを表す型で、propsの型を指定することができる

//props：親コンポーネントから子コンポ―ネントに渡されるデータ
//このコードの場合、app関数からLoginFormコンポーネントにデータを渡すことができる

//LoginFormコンポーネントでは、setUsernameという関数をpropsとして受け取ることを示している
//({ setUsername }によって、関数内でsetUsernameを直接使用できるようになる(proprs.setUsernameではなくなる)
const LoginForm: React.FC<LoginFormProps> = ({ setUsername }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");

  const handleRegister = async () => {
    try {
      await AuthService.register(email, password, newUsername);
      alert("登録成功");
    } 
    catch (error) 
    {
      if (error instanceof Error) 
      {
        alert("登録失敗" + error.message);
      } 
      else 
      {
        alert("登録失敗: 不明なエラー");
      }
    }
  };

  const handleLogin = async () => {
    try 
    {
      const { username } = await AuthService.login(email, password);
      setUsername(username);
      alert("ログイン成功");
    } 
    catch (error) 
    {
      if (error instanceof Error) 
      {
        alert("ログイン失敗" + error.message);
      } 
      else 
      {
        alert("ログイン失敗: 不明なエラー");
      }
    }
  };

  return (
    <div>
      <h2>ログイン / 登録</h2>
      <input type="email" placeholder="メールアドレス" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="パスワード" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="text" placeholder="ユーザー名" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
      <button onClick={handleRegister}>登録</button>
      <button onClick={handleLogin}>ログイン</button>
    </div>
  );
};

export default LoginForm;
