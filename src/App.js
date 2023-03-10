import './App.css';
import axios from 'axios';
import React from "react";


export default function App() {
  const [JerseyNo, setJerseyNo] = React.useState("");
  const [FirstName, setFirstName] = React.useState("");
  const [LastName, setLastName] = React.useState("");
  const [TotalRuns, setTotalRuns] = React.useState("");
  const [Wickets, setWickets] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/save",{
      JerseyNo:JerseyNo,
      FirstName:FirstName,
      LastName:LastName,
      TotalRuns:TotalRuns,
      Wickets:Wickets
    }).then(response=>{
      alert(response.data)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>JerseyNo:
        <input 
          type="number" 
          value={JerseyNo}
          onChange={(e) => setJerseyNo(e.target.value)}
        />
        </label>
        <br></br>

<label>FirstName:
<input 
          type="text" 
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
</label>
<br></br>

<label>LastName:
<input 
          type="text" 
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
        />
</label>
<br></br>

<label>TotalRuns:
<input 
          type="number" 
          value={TotalRuns}
          onChange={(e) => setTotalRuns(e.target.value)}
        />
</label>
<br></br>
<label>Wickets:
<input 
          type="number" 
          value={Wickets}
          onChange={(e) => setWickets(e.target.value)}
        />
</label>
<br></br>

      <input type="submit" />
    </form>
  )
}