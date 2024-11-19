import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";

const HowToHelp = () => {
  const helpOptions = useLoaderData();
  const navigate = useNavigate();
  return (
    <div className="py-8 w-[90%] mx-auto">
      <Helmet>
        <title>Donate For Winter | HowToHelp</title>
      </Helmet>
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gray-100 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Your Help Can Make a Difference!
          </h1>
          <p className="text-lg">
            Explore ways to support our mission and create a lasting impact.
          </p>
        </section>

        {/* Ways to Help Section */}
        <section className="container mx-auto px-4 py-10">
          <h2 className="text-3xl font-bold text-center mb-8">
            Ways You Can Help
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {helpOptions.map((option) => (
              <div
                key={option.id}
                className="bg-gray-100 shadow-md rounded-lg p-6 text-center"
              >
                <div className="text-5xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <button
                  onClick={() => navigate("/donationCampaigns")}
                  className="btn btn-primary text-white px-6 py-2 rounded-md hover:bg-blue-700"
                >
                  {option.buttonText}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gray-100 py-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
          <p className="text-lg mb-6">
            Be part of the change. Every effort counts!
          </p>
          <button
            onClick={() => navigate("/donationCampaigns")}
            className="bg-neutral text-white px-6 py-3 font-semibold rounded-md"
          >
            Get Involved
          </button>
        </section>
      </div>
    </div>
  );
};

export default HowToHelp;
