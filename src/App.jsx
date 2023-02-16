// import logo from "../public/icons/logo.svg"; // 不成功，會跳錯：which falls outside of the project src/ directory
import "./components/main.scss";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
