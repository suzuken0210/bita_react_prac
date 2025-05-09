import { useState, useEffect, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from "./LoginForm";

function App() {
  const [count, setCount] = useState(0)
  const nasURL = "data:image/webp;base64,UklGRiwFAABXRUJQVlA4ICAFAAAwHwCdASqgAHcAPokqolElIaUlEtCgEQlnANRprBbKVpPIAwSSuNvaTK1T9mxQth0CsKns4yp+Ws3xE8L/ptnZ2IE28TfTYQDMYOqaPq/XzdVz/abDBDjxe3/aTGN3qR7pLwnX6fNeqfSbwaRnu0/6uoyUq8h/5T2TNVoW2hLd+lXL7Ce1vmqR17wQcmFY949ihHCLXf3jkxlK/IqGbrpU8e/IhwhvNpTHS5GQw4Q+81vQaB75DP4mvWixv0PFP4uNw/Bup5kTutXRRRZCmv4XoeYHXTPNwvWQIUij3QZClakzy35nwPGGMQ8M4s5iq7qFRMqPhPYJCi6GwrhKD5cSgmAA/vyoAAI9G9/V5hIPALBdMdgkKLAucLhB2driOOjKowPKWZtPtvw07ltfGyABMa7X++8veMljg+CN4FDzMIhKEJpicgdi8s4X5dM0bd8rX01gharU1tXiICeiJW1U5z4OEeE8soGEOQYvXBxcQ/xZyWkAn5u7OxmBQHRI1anOEQvWXgAoq24la3OY2MQNWRe9aV7QoAu/NP3tKfoGiwlcAeW4Z02wafGX6OhtShotR5/3TDF4a/BVfE5vQNbh/+i1AQ5ED9PONnvelBEfMXrDidsTa4VbKeoR/CRjTUtFr3KZFILr6zpeLE5lnFzNcZM3nP50cL+Xqt5u0hs+YG6+v1RnIgePbuJ05uInAVR93DibYk8e7Va1VCBQ+XA4hl+CFpksJoYgQppcupz4X66XmOgu6w+ygqqP8mOdrhtFl2GbWOQGUAPcGeQHmJSAxZoAovbG+8vS2tWlRUGCpKnFThQcBr6zZLSZCV35tbmc/m2MNL943MN4HDTktSHRWD7eHtcnPH+7+iy3fix+8LuYS8drs3krd0yar/CIyBxTiawYquH8eDYDr+K2yfM1YyKeG5HTub7HvXde0VSPjOcGqPpAWwFOGhj6lab4mQIFXrGerMo0cLyVgtngD4iHOFUJ0b0MMm28/nChGV2VLkSCUUgbUSfDKPgxAWUH1bmjTWl8eDc1q9ZFqY252fSmaBJpB+GZzAt3uurx6EaWiEp7hB8FFYgyJULpHuOKDqHjh2vqHjfLm8diGig7oUJJJkbmPl4ax4zUUlcUEqGzNvciRTeqw6AoTXR6HCoCwjhJewHP1JxwAIdgTzvx0VBhd56KC/3bcMmCv/ZnnX3iYe0NbL/wG1M1/9ZQ3vGhrUecrsd7FCStwqUdkVIDkVrf0sFPo2YDbTt7qZHmLe7AHkcHcQMXMAdTwuHt4vJguSgAaW7fFQHORPMOpwqAyXJxZTE++eKkgjXxRkAcoBIuLICUrl34sxf3QXEIkTDHoi/X19G2hq9VsksbCLT9sEvNcpygt6n44xZf7u7hK8DvmmyZOEeZQsOs+yyQOv5J/0Wa+exvSwmMAqoYmC1+OOmfoUkRVJMGV1VIAfxcMz/OkcnytPG4Gbroa2enVxNhsK/ikOsjcYUdt6eAgyWAIbhtjN4d5UIHjjfy8gb101Zn9qaVPBrerD7wBqQyH9ZarwPDq/MQ5lynSj9gkDfUM12iNg2bd/00orJ0CwPHuB3lPH9y2TLeYWNCY/Cs4NZisoFlkyAsfTrvcCAuUv5KtrqV3f3s/8xoIHY7Y/sDj5NoGkGbdmIKCP4vDDdJ89ZHEU8XK9XGk1QR8DSuPhcjcpDDSpXB3W3ViAcQOHQ3/S0cYOER6q1eWgAlCjlXk/YePsrEE1DZQYkHUEEnAd3AAAAA"
  const appRef = useRef<HTMLDivElement>(null);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    if (appRef.current) {
      appRef.current.classList.add("fade-in"); // アニメーションを適用
    }
  }, []);

  return (
    <>
      <div ref={appRef}>
        {<a href="https://www.google.com/search?q=%E3%83%8A%E3%82%B9%E3%80%80%E3%83%AC%E3%82%B7%E3%83%94&sca_esv=f2c24bc0eda68a1d&rlz=1C1GCEA_enJP1158&biw=1280&bih=665&ei=Zf4GaMLbOK-k0-kPyuukEQ&ved=0ahUKEwiCoru6y-qMAxUv0jQHHco1KQIQ4dUDCBA&uact=5&oq=%E3%83%8A%E3%82%B9%E3%80%80%E3%83%AC%E3%82%B7%E3%83%94&gs_lp=Egxnd3Mtd2l6LXNlcnAiEuODiuOCueOAgOODrOOCt-ODlDINEAAYgAQYsQMYgwEYBDINEAAYgAQYsQMYgwEYBDINEAAYgAQYsQMYgwEYBDIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIHEAAYgAQYBDIHEAAYgAQYBDIHEAAYgAQYBDIHEAAYgAQYBDIHEAAYgAQYBEjPalCbAliRaHAMeAGQAQCYAawBoAG9DKoBBDMuMTG4AQPIAQD4AQGYAhagAq4JqAIUwgIKEAAYsAMY1gQYR8ICEBAAGIAEGLEDGIMBGAQYigXCAgoQABiABBixAxgEwgIFEAAYgATCAggQABiABBixA8ICFBAAGIAEGOMEGLQCGOkEGOoC2AEBwgIWEAAYgAQY4wQYtAIY6QQY6gIYCtgBAcICEBAAGAMYtAIY6gIYjwHYAQLCAgsQABiABBixAxiDAcICEBAAGIAEGLEDGEMYgwEYigXCAg0QABiABBixAxiDARgNwgIHEAAYgAQYDZgDDPEFoOQi6X9_KZaIBgGQBgq6BgQIARgHugYGCAIQARgKkgcEMTQuOKAH2TSyBwMyLji4B-II&sclient=gws-wiz-serp" target="_blank">
          <img src={nasURL} className="logo" alt="Cute Cat" />
        </a>
        

        /* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <div style={{ textAlign: "center",}} ref={appRef}>
      {Array.from({ length: count }).map((_, index) => {
        const randomX = Math.random() * (window.innerWidth+110) * 0.8; // 画面幅の80%以内でランダム配置
        const randomY = Math.random() * ((window.innerHeight / 2.0)+80) * 0.8; // 画面高さの80%以内でランダム配置
        const randomWidth = Math.random() * 50 + 20; // 50pxから150pxの間でランダムな幅
        const randomHeight = Math.random() * 50 + 20; // 50pxから150pxの間でランダムな高さ
        return (
          <img
            key={index}
            src={nasURL}
            alt="ナス"
            style={{
              width: `${randomWidth}px`,
              height: `${randomHeight}px`,
              position: "absolute",
              top: `${randomY}px`,
              left: `${randomX}px`,
            }}
          />
        );
      })}
    </div>
      <h1>ナスの建築project ～待つ歌～</h1>
      <div className="header">
        {username && <p className="username-display">ようこそ, {username} さん！</p>}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <LoginForm setUsername={setUsername}/>
      <p className="read-the-docs">
        ログイン時はユーザー名不要でログイン可能
      </p>
    </>
  )
}

export default App
