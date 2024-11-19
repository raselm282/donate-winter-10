const ExtraSection1 = () => {
  return (
    <div className="w-[90%] mx-auto">
      <section className="py-8 bg-blue-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
            <div className="bg-white shadow-lg rounded-lg p-6 space-y-5">
            <img className="h-60  text-center" src="https://i.ibb.co.com/5cPP7xT/Family-A.jpg" alt="" />
              <h3 className="text-xl font-bold mb-2">Family A</h3>
              <p className="text-gray-600">
                With your help, this family received blankets and warm clothes
                for the winter.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 space-y-5">
                <img className="h-60  text-center" src="https://i.ibb.co.com/Kzmhc5j/Local-School.jpg" alt="" />
              <h3 className="text-xl font-bold mb-2">Local School</h3>
              <p className="text-gray-600">
                Over 200 students were provided with winter essentials, keeping
                them safe from the cold.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 space-y-5">
                <img className="h-60  text-center" src="https://i.ibb.co.com/T4zqLt4/Community-Center1.jpg" alt="" />                
              <h3 className="text-xl font-bold mb-2">Community Center</h3>
              <p className="text-gray-600">
                Food supplies and heating resources were distributed to
                community centers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraSection1;
