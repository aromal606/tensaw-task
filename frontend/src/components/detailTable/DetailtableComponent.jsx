import React from "react";
import data from "../../api/data.json";
import "./detaitable.css";
import { useSelector } from "react-redux";
import { selectClinicId } from "../../redux/clinicSlice";
import { Link, useParams } from "react-router-dom";

const DetailtableComponent = () => {
  const { clinicId } = useParams();
  // const clinicId = useSelector(selectClinicId)

  const findDetails = data.find(
    (clinic) => clinic.clinicId === parseInt(clinicId)
  );
  console.log(findDetails);
  if (findDetails === null) {
    return null;
  }

  const renderField = (label, value) => {
    return (
      <div className="valuefield">
        <label>
          {label} :
          <input
            className="inputboxs"
            type="text"
            value={value || "No Data"}
            readOnly
          />
        </label>
      </div>
    );
  };

  return (
    <>
      <div className="content">
        <h2>Clinic Details</h2>
      </div>
      <Link to="/data">
        <button className="backtotablebutton">
          <svg
            className="arrowback"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
              data-name="4-Arrow Left"
            />
          </svg>
          Back
        </button>
      </Link>
      <div className="detailDataContainer">
        {/* <h2>Clinic Details</h2> */}
        {renderField("Clinic Name", findDetails.clinicName)}
        {renderField("Address", findDetails.address)}
        {renderField("City", findDetails.city)}
        {renderField("State", findDetails.state)}
        {renderField("Zip", findDetails.zip)}
        {renderField("Phone", findDetails.phone)}
        {renderField("Email", findDetails.email)}
        {renderField("Frontdesk Name", findDetails.frontdeskName)}
        {renderField("Office Manager Name", findDetails.officeManagerName)}
        {renderField("Physician Name", findDetails.pysicianName)}
        {renderField("EMR Name", findDetails.emrName)}
        {renderField("Sales Person", findDetails.salesPerson)}
        {renderField("Billing", findDetails.billing)}
        {renderField(
          "Length Of Current Billing Relationship",
          findDetails.durationOfRelationship
        )}
        {renderField("Last Visit", findDetails.lastVisit)}
        {renderField("Speciality", findDetails.speciality)}
        {renderField("Lead Status", findDetails.status)}
      </div>
    </>
  );
};

export default DetailtableComponent;
