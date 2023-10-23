import './App.css'
import { Header } from "./shared/header/Header.jsx";
import { Main } from "./shared/main/Main.jsx";
import { Footer } from "./shared/footer/Footer.jsx";
import { AuthContextProvider } from "./shared/utils/context/authContext.jsx";

function App() {

  return (
    <AuthContextProvider>
        <Header />
        <Main />
        <Footer />
    </AuthContextProvider>
  );
}

export default App
