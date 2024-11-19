import { Link } from "react-router-dom";

const ExtraSection2 = () => {
  return (
    <div className="w-[90%] mx-auto">
      <section className="py-16 bg-blue-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Volunteer Team</h2>
        <p className="text-lg mb-6">
          Become a part of our mission and make a difference in the lives of
          those in need. Your time and effort can change lives.
        </p>
        <Link to={"/login"} className="btn bg-neutral text-white px-6 py-3 rounded-md font-semibold hover:text-black hover:font-semibold">
          Sign Up Now
        </Link>
      </section>
    </div>
  );
};

export default ExtraSection2;
