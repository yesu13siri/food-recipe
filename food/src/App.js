
import React,{useState} from"react";
import Products from "./products";
const App=()=>{
  const [search,setSearch]=useState(""); 
  const [data,setData]=useState([]);
  const YOUR_APP_ID="d94bf41a";
  const YOUR_APP_KEY="1743b98bbb7d373162fe6a493ff1ba7d";
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=18&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    )
  }
  return(
    <div style={{"backgroundColor":"#B0E0E6"}}>
      <center>
        <h4 style={{"font-size":"4rem"}}>food Recipe App</h4>
        <br />
        <form onSubmit={submitHandler}>
          <input style={{"backgroundColor":"#C0C0C0"}} type='text'value={search} onChange={(e)=>setSearch(e.target.value)}/><br />
          <br />
          <input type="submit" className="btn btn-primary" style={{"width":"10rem" ,"height":"2.5rem","marginBottom":"3rem" }}value="search" />
        </form>
        {data.length>=1 ?<Products data={data}/>:null}
      </center>
    </div>
  )
}


export default App;
