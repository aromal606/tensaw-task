import React, { useState } from "react";
import "./searchbox.css";


const SearchBoxComponent = ({onSearch, onReset}) => {
  const [clinic, setClinic] = useState("")
  const [city, setCity] = useState("")
  const [zip, setZip] = useState("")

  const handleSearch = (e)=>{
    onSearch({clinic,city,zip})
    e.preventDefault()
   
  };

  const handleReset = ()=>{
    setClinic("");
    setCity("");
    setZip("");
    if (onReset){
      onReset()
    }
  }
  return (
    <>
      <div className="container">
        <div className="searchbox">
          <p className="searchboxheading">Search</p>
          <form onSubmit={handleSearch} onReset={handleReset}>
           
            <input
              className="inputbox"
              type="text"
              name="clinic"
              id="clinic"
              value={clinic}
              placeholder="Clinic"
              onChange={(e)=>setClinic(e.target.value)}
            />
            <input
              className="inputbox"
              type="text"
              name="city"
              id="city"
              value={city}
              placeholder="City"
              onChange={(e)=>setCity(e.target.value)}
            />
            <input
              className="inputbox"
              type="text"
              name="zip"
              id="zip"
              value={zip}
              placeholder="Zip"
              onChange={(e)=>setZip(e.target.value)}
            />
            <button className="submitbutton" type="submit">
              Search
            </button>
            <button className="resetbutton" type="reset">
              Reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBoxComponent;
