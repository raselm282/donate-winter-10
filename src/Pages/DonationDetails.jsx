import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const singleData = data.find((d) => d.id == id);
    setDetail(singleData);
  }, []);
  const { title, description, division } = detail;

  // another system**********
  // const {title} = useLoaderData()
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center my-8">
        Donation Campaign Details
      </h1>

      {/* Display all data available for the campaign */}
      <div className="items-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>
          <strong>Description:</strong> {description}
        </p>
        <p>
          <strong>Division:</strong> {division}
        </p>
      </div>

      {/* Donation form */}
      <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl mx-auto">
        <form className="card-body">
          <strong className="text-center text-2xl">Donation Form</strong>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity of items</span>
            </label>
            <label className="label">
              <span className="label-text">Jacket</span>
            </label>
            <input
              className="input input-bordered"
              type="number"
              id="quantity"
              name="quantity"
              placeholder="0"
              required
            />
            <label className="label">
              <span className="label-text">Blankets</span>
            </label>
            <input
              className="input input-bordered"
              type="number"
              id="quantity"
              name="quantity"
              placeholder="0"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Item type</span>
            </label>
            <input
              className="input input-bordered"
              type="text"
              id="itemType"
              placeholder="Items"
              name="itemType"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Pickup location</span>
            </label>
            <input
              className="input input-bordered"
              type="text"
              id="pickupLocation"
              name="pickupLocation"
              placeholder="Location"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Additional notes (optional)</span>
            </label>
            <textarea
              className="input input-bordered"
              id="notes"
              name="notes"
              placeholder="Drop a Message"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonationDetails;
