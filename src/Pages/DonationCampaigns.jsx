import { useLoaderData } from "react-router-dom";
import Campaigns from "../Components/Campaigns";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const DonationCampaigns = () => {
  const campaigns = useLoaderData();
  const {user} = useContext(AuthContext)

  return (
    <div className="w-[90%] mx-auto my-10">
      <Helmet><title>Donate For Winter | DonationCampaigns</title></Helmet>
      <strong className="text-xl">Donation Campaigns{campaigns.length}</strong>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate__animated animate__pulse">
        {campaigns.map((campaign) => (
          <Campaigns
            key={campaign.id}
            campaign={campaign}
          ></Campaigns>
        ))}
      </div>
    </div>
  );
};

export default DonationCampaigns;
