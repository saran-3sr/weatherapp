import { useState } from 'react';
import { useEffect } from 'react';
import Display from './Display';
import Error from './Error';
function Main() {
  const [city, setcity] = useState("Chennai")
  const [input_text, setinput] = useState("")
  const [error,seterror]=useState("")
  const eventhandler=()=>{
    setcity(input_text)
  }
  const [Location, setLocation] = useState("")
  const [Current, setCurrent] = useState("")
  const changehandler=(e)=>{
      e.preventDefault()
      setinput(e.target.value)
  }
  useEffect(async() => {
    const data=await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key": "8629496fc6mshc30412df8d63b40p10986cjsn1597e74869d6"
      }
    })
    console.log(data["status"])
    if(data["status"]==200)
    {
      var dataJSON=await data.json()
      console.log(dataJSON)
      setCurrent(dataJSON["current"])
      setLocation(dataJSON["location"])
      seterror("")
    }
    else
    {
      seterror("Please Enter the Valid City")
      setCurrent("")
      setLocation("")
    }
  }, [city])
    
   
  
  return (
    <div className="App">
      <div className="navbar navbar-light cus-nav">
        <div className='container'>
            <div className="input-group">
                <input type="text" className="form-control" onChange={changehandler}/>
                <button className="input-group-text" onClick={eventhandler}>Search</button>
            </div>
        </div>
    </div>
    {Location&&Current&&<Display location={Location} current={Current}/>}
    {error&& <Error error={error}/>}
    </div>
     
  );
}

export default Main;