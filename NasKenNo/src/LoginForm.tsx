import { useState } from "react";
import AuthService from "./AuthService";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try 
    {
      await AuthService.register(email, password);
      alert("登録成功");
    } 
    catch (error) 
    {
      alert("登録失敗" + error);
    }
  };

  const handleLogin = async () => 
    {
    try 
    {
      await AuthService.login(email, password);
      alert("ログイン成功");
    } 
    catch (error) 
    {
      alert("ログイン失敗");
    }
  };

  return (
    <div>
      <h2>ログイン / 登録</h2>
      <input type="email" placeholder="メールアドレス" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="パスワード" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>ログイン</button>
      <button onClick={handleRegister}>登録</button>
    </div>
  );
};

export default LoginForm;
