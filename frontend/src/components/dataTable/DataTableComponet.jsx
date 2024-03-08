import React, { useEffect, useState } from "react";
import "./datatable.css";
import data from "../../api/data.json";
import { useDispatch } from "react-redux";
import { setClinicId } from "../../redux/clinicSlice";
import { NavLink } from "react-router-dom";

const DataTableComponent = ({ searchData, onReset }) => {
  const dispatch = useDispatch();

  // console.log("Received search data:", searchData);
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    const updatedFilteredData = data.filter((clinic) => {
      const matchName =
        clinic?.clinicName &&
        clinic.clinicName
          .toLowerCase()
          .includes(searchData?.clinic?.toLowerCase()) &&
        searchData?.clinic !== "";
      const matchCity =
        clinic?.city &&
        clinic?.city.toLowerCase().includes(searchData?.city?.toLowerCase()) &&
        searchData?.city !== "";
      const matchZip =
        clinic?.zip &&
        clinic.zip.toString().includes(searchData?.zip?.toString()) &&
        searchData?.zip !== "";

      return matchName || matchCity || matchZip;
    });
    setFilteredData(updatedFilteredData);
  }, [searchData]);

  const handleReset = () => {
    setFilteredData(data);
    if (onReset) {
      onReset();
    }
  };

  const handleClinicDetails = (clinicId) => {
    dispatch(setClinicId(clinicId));
    console.log(clinicId);
  };
  const displayedData = searchData ? filteredData : data;
  return (
    <>
      <div className="table-container">
        <button className="resetbuttonontabel" onClick={handleReset}>
          All Data
        </button>
        {displayedData.length > 0 ? (
          <table>
          <thead>
            <tr>
              <th>Clinic</th>
              <th>Address</th>
              <th>City</th>
              <th>Zip</th>
              <th>Phone</th>
              <th>Physician</th>
              <th>Status</th>
              <th>Created Date</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((clinic) => (
              <tr key={clinic.clinicId} onClick={() => handleClinicDetails(clinic.clinicId)}>
                <td>
                  <NavLink to={`/details/${clinic.clinicId}`} activeClassName="active">
                    {clinic.clinicName}
                  </NavLink>
                </td>
                <td>{clinic.address}</td>
                <td>{clinic.city}</td>
                <td>{clinic.zip}</td>
                <td>{clinic.phone}</td>
                <td>{clinic.pysicianName}</td>
                <td>{clinic.status}</td>
                <td>{new Date(clinic.createdDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        ) : (
          <div className="nodatamessage">
            <p>Sorry No data found !! </p>
          </div>
        )}
      </div>
    </>
  );
};

export default DataTableComponent;
