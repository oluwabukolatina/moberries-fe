import React from 'react';
import CustomInput from './CustomInput';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const onChange = () => {};
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="form-group col-lg-12 d-flex p-0">
        <div className="field mb-4 col-lg-6 pl-0">
          <CustomInput
            disabled={false}
            onchange={onChange}
            name="houseNumberName"
            value=""
            type="text"
            id="code"
            placeholder="House Name or House Number"
            classname="form-control"
          />
          {/* <CustomSpan classname="label-type" name="House Number/Name" /> */}
        </div>
        <div className="mb-4 field col-lg-6 pr-0">
          <CustomInput
            disabled={false}
            onchange={onChange}
            name="streetName"
            value=""
            type="text"
            id="box"
            placeholder="Street Name"
            classname="form-control"
          />
          {/* <CustomSpan classname="label-type ml-3" name="Street Name" /> */}
        </div>
      </div>

      <div className="form-group col-lg-12 d-flex p-0">
        <div className="field mb-4 col-lg-6 pl-0">
          <CustomInput
            disabled={false}
            onchange={onChange}
            name="zipCode"
            value=""
            type="text"
            id="code"
            placeholder="Post/zip code"
            classname="form-control"
          />
          {/* <CustomSpan classname="label-type" name="Post/zip code" /> */}
        </div>
        <div className="field mb-4 col-lg-6 pr-0">
          {/* <CustomSpan classname="label-type" name="Residential State" /> */}
        </div>
      </div>

      <div className="form-group col-lg-12 p-0 d-flex">
        <Link to="#" style={{ color: 'black' }} data-target="#carouselExampleCaptions" data-slide-to="0">
          <p className="mt-3">
            <i className="fa fa-angle-left"></i> Previous page
          </p>
        </Link>
        <div className="ml-auto">
          <button className="btn btn-success" data-target="#carouselExampleCaptions" data-slide-to="2">
            Next
          </button>
        </div>
      </div>
    </form>
  );
}
