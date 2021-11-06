import './App.css';
import NavButton from './components/NavButton';
import Info from './components/Info';
import ButtonUpHome from './components/ButtonUpHome';

function App() {
  console.log(document.body.width);
  return (
    <div className="App">
      <NavButton/>
      <ButtonUpHome/>
      <Info/>
    </div>
  );
}

export default App;
