const WorksSection = () => {
  return (
    <div className="w-[90%] mx-auto">
      <section className="py-8 bg-blue-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center justify-center space-y-5">
                <img className="h-60  text-center" src="https://i.ibb.co.com/kmg27bm/Donate.jpg" alt="" />
              <h3 className="text-xl font-bold mb-2">Step 1: Donate</h3>
              <p className="text-gray-600">
                Choose items or funds you'd like to donate to our campaign.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center space-y-5">
                <img className="h-60" src="https://i.ibb.co.com/F0C5nNg/Drop-Off.jpg" alt="" />
              <h3 className="text-xl font-bold mb-2">Step 2: Drop Off</h3>
              <p className="text-gray-600">
                Deliver your donation to our collection points.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center space-y-5">
                <img className="h-60" src="https://i.ibb.co.com/9YmFf6g/Support.jpg" alt="" />
              <h3 className="text-xl font-bold mb-2">Step 3: Support</h3>
              <p className="text-gray-600">
                Your donations will reach the supported divisions and
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorksSection;
