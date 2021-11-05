import './App.css';
import NavButton from './components/NavButton';
import PresentationCard from './components/info/PresentationCard';
import ButtonUpHome from './components/ButtonUpHome';

function App() {
  console.log(document.body.width);
  return (
    <div className="App">
      <NavButton/>
      <PresentationCard/>
      <ButtonUpHome/>
    </div>
  );
}

export default App;
