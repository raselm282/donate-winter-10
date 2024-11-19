import { NavLink, useNavigate } from "react-router-dom";

const Campaigns = ({ campaign }) => {
    const {id,title,division,description,image} = campaign
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
      <img
          src={image}
          alt={title}
          className="campaign-image h-64"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p><strong>Division:</strong> {division}</p>
        <div className="card-actions justify-end">
        <NavLink to={`/donationDetails/${id}`}
          className="btn btn-primary donate-button"
        >
          Donate Now
        </NavLink>
        </div>
      </div>
    </div>
    // <div className='space-y-5'>
    //     <div key={campaign.id} className="campaign-card">
        // <img
        //   src={campaign.image}
        //   alt={campaign.title}
        //   className="campaign-image"
        // />
    //     <h2>{campaign.title}</h2>
    //     <p>{campaign.description}</p>
    //     <p><strong>Division:</strong> {campaign.division}</p>
        // <button
        //   onClick={() => navigate(`/donationDetails/${campaign.id}`)}
        //   className="donate-button"
        // >
        //   Donate Now
        // </button>
    //   </div>
    // </div>
  );
};

export default Campaigns;