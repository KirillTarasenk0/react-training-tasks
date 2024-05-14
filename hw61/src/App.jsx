import './App.css';
import Title from './Components/Title/Title';
import BurgerMenu from "./Components/BurgerMenu/BurgerMenu";
import Tabs from "./Components/Tabs/Tabs";

function App() {
  return (
    <>
      <Title
          title={'Sign in'}
      />
      <BurgerMenu
          userName='Kirill Tarasenko'
      />
      <Tabs/>
    </>
  );
}

export default App;
