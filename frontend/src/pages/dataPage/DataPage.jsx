import React, { useState } from "react";
import "./datapage.css";

import SearchBoxComponent from "../../components/searchbox/SearchBoxComponent";
import NavbarComponent from "../../components/navbar/NavbarComponent";
import DataTableComponet from "../../components/dataTable/DataTableComponet";

const DataPage = () => {
  const [searchData, setSearchData] = useState(null);
  const handleSearch = (data) => {

    setSearchData(data);
  };

  const handleReset = () => {
   
    setSearchData(null);
  };

  return (
    <>
      <div className="dataandsearchcontainer">
        <NavbarComponent />
        <div className="searchanddatabox">
          <div className="div">
            <SearchBoxComponent onSearch={handleSearch} onReset={handleReset}/>
          </div>
          <div className="div">
            <DataTableComponet searchData={searchData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DataPage;
