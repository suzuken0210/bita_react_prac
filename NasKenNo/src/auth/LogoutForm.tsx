// LogoutButton.tsx
import React from "react";
import AuthService from "./AuthService";

interface LogoutButtonProps {
  onLogout: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  const handleLogout = async () => {
    try 
    {
      const result = await AuthService.logout();
      if (result) 
      {
        alert("ログアウトに成功しました");
        onLogout();
      } 
      else 
      {
        alert("既にログアウトされています");
      }
    } 
    catch (error) 
    {
      if (error instanceof Error) 
      {
        alert("ログアウトに失敗しました: " + error.message);
      } 
      else 
      {
        alert("ログアウトに失敗しました: 不明なエラー");
      }
    }
  };

  return <button onClick={handleLogout}>ログアウト</button>;
};

export default LogoutButton;
