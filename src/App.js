import React,{useState} from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import News from './Components/News'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar' //Loading bar Component installed using npm 



function App() {
  const [progress, setProgress] = useState(0)
  const [darkTheme, setDarkTheme] = useState(false)
  const [themeText, setThemeText]= useState("Dark Mode")
  
  const loadingBarProgress = (progress)=>{
    setProgress(progress)
  }
  let theme = darkTheme?"dark":"light"

  const handleTheme = () => {
    
    setDarkTheme(!darkTheme)
    let updateThemeText = darkTheme?"Light Mode":"Dark Mode"
    setThemeText(updateThemeText)

  };

  return (
    <div className="App">
      <Router>
      <NavBar theme={theme}/>
      <LoadingBar color='#f11946' progress={progress} /> 

      <button className={`btn btn-theme bg-secondary-${theme}`} onClick={handleTheme} > {themeText}</button>  
          <Routes>
                <Route exact path="/"  element={ <News loadingBar={loadingBarProgress} key="general" pageSize={10} category='General' country="us" theme={theme}/>} />
                <Route exact path="/business"  element={ <News loadingBar={loadingBarProgress} key="business" pageSize={10} category='Business' country="us" theme={theme}/>} />
                <Route exact path="/entertainment"  element={ <News loadingBar={loadingBarProgress} key="entertainment" pageSize={10} category='Entertainment' country="us" theme={theme}/>} />
                <Route exact path="/health"  element={ <News loadingBar={loadingBarProgress} key="health" pageSize={10} category='Health' country="us" theme={theme}/>} />
                <Route exact path="/science"  element={ <News loadingBar={loadingBarProgress} key="science" pageSize={10} category='Science' country="us" theme={theme}/>} />
                <Route exact path="/sports"  element={ <News loadingBar={loadingBarProgress} key="sports" pageSize={10} category='Sports' country="us" theme={theme}/>} />
                <Route exact path="/technology"  element={ <News loadingBar={loadingBarProgress} key="technology" pageSize={10} category='Technology' country="us" theme={theme}/>} />
              </Routes>
        </Router>
    </div>
  );
}

export default App;
