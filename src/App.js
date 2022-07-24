import React, { useEffect, useState } from "react";
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { act } from "react-dom/test-utils";

function App() {

  const [states,setStates]=useState([]);

  const getCovidData= async ()=>{
    const res= await fetch('https://data.covid19india.org/data.json');
    const actualData=await res.json();
    
    setStates(actualData.statewise);
  }

  useEffect(()=>{
    getCovidData();
  },[]);

  return (
    <>
    <div className="container-fluid">
      <div className="main-heading">
        <h2 className=" text-center"><span className="font-weight-bold">India</span> Covid-19 Data - statewise</h2>
      </div>
      
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="thead-dark header">
            <tr>
              <th >State</th>
              <th >Confirmed</th>
              <th >Recovered</th>
              <th >Deaths</th>
              <th >Active</th>
              <th >Update</th>
            </tr>
          </thead>
          <tbody className="body">
            {
              states.map((stateObject,index)=>{
                return (
                  <tr key={index}>
                    <th>{stateObject.state}</th>
                    <th>{stateObject.confirmed}</th>
                    <th>{stateObject.recovered}</th>
                    <th>{stateObject.deaths}</th>
                    <th>{stateObject.active}</th>
                    <th>{stateObject.lastupdatedtime}</th>
                  </tr>
                );
              })
            }
            
          </tbody>
        </table>
      </div>
    </div>   
  </>
  );
}

export default App;
