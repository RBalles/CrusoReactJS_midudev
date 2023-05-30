import './App.css';

const Avatar = (props) => {
  const src = `https://randomuser.me/api/portraits/women/${props.id}.jpg`;
  return (<picture> 
  <img alt="Imagen de avatar" src= {src} />
  {props.name}
  </picture>
   )
  
}

function App() {
  return (
    <div className="App">
      <h1>Woman in Tech</h1>
      <Avatar id="1" name="Julia" />    
      <Avatar id="2" name="Paca" />    
      <Avatar id="3" name="Manuela" />    
    </div>
  );
}

export default App;
