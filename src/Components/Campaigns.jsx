import { NavLink, useNavigate } from "react-router-dom";

const Campaigns = ({ campaign }) => {
  const { id, title, division, description, image } = campaign;
  return (
    <div className="card bg-base-100 shadow-xl transition hover:scale-105 overflow-hidden ">
      <figure>
        <img src={image} alt={title} className="campaign-image h-64" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>
          <strong>Division:</strong> {division}
        </p>
        <div className="card-actions justify-end">
          <NavLink
            to={`/donationDetails/${id}`}
            className="btn btn-primary donate-button"
          >
            Donate Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
