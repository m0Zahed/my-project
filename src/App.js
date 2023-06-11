import './App.css';
import SideScroller from './components/SideScroller';
import Login from './components/Login'
import { useState } from 'react';
import Register from './components/Register';
import { useRouteLoaderData } from 'react-router-dom';


function Header(props){
  const { size, extra } = props;
  let classText = `${extra} text-${size}xl font-bold underline`;
  return (
    <div class="bg-black text-white">
      <h1 className={classText}>
          Splitter Song
      </h1>
    </div>

  );
}

const UserLoginController = (type) =>
{ 
  // console.log(type);
  switch(type) {
    case 'Register':
      return (<Register />);
    default:
      return (<Login />);
  };
}

function App(props) {

  const newPage = useRouteLoaderData("new");
  const itemPage = useRouteLoaderData("item");
  let PageDataToDisplay = newPage ? newPage : (itemPage ? itemPage : false);
                                                    
  if (props.access==="LoggedIn")
  {
    return (<div className="App">
    <Header size="2"/>
    <SideScroller loadedData={PageDataToDisplay}/>
    </div>);
  }
  else if(props.access==="LoggedOut")
  { 
    return (
    <div >
      <Header size="" extra="flex justify-center"/>
      {UserLoginController(props.type)}
    </div>
  );
  }
  
}

export default App;
