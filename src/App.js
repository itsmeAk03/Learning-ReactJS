
import React,{ useState }  from 'react'; 
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';



function App() {
  const[mode,setMode]=useState('light');
  const[greenMode,setGreenMode]=useState('light');
  const[alert, setAlert] = useState('alertmsg');
  // const[col,myColor]=useState('blue');


  const showAlert=(message ,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(' ');
    }, 1500);
  }

  // const btnColor=(rang)=>{
  //   myColor({
      
  //   })
  // }
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark Mode has been enabled","success");
   
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light Mode has been enabled","success");
     
    }
  }

  const GreenMode=()=>{
    if(greenMode==='light'){
    setGreenMode('dark');
    document.body.style.backgroundColor='green';
    showAlert("Green Dark Mode has been enabled","success");
   
    }
    else{
      setGreenMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light Mode has been enabled","success");
     
    }
  }
  return (
      <>
        <Navbar title="Textutils" aboutText="About" greenMode={greenMode} mode={mode} toggleMode={toggleMode} GreenMode={GreenMode} />
        <Alert alert={alert} />
        <div className="container my-3" >
        <TextForm  showAlert={showAlert} heading="Enter the text " greenMode={greenMode} mode={mode} />
        </div>
        {/* <About/> */}
       
      </>

  );
}

export default App;
