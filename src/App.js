import './App.css';
import Profil from './Component/Profil';

function App() {
  const fullname ="Chneina Fatma";
  const Age ="27 ans";
  const profession=" Web Dev Student"
  const handleName= (x)=>alert (x);
  return (
   <div>
<Profil name={fullname}
        Age={Age}
        prof={profession}
        handleName= {handleName} 
        />
   </div>
  );
}

export default App;