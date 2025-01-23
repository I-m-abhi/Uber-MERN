import { Link } from "react-router";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div
        className="h-full bg-cover bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"
      >
        <img
          className="w-16 ml-6 mt-6"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uber-logo"
        />
      </div>
      <div className="py-4 px-6">
        <h2 className="text-2xl font-bold text-center">Get Started with Uber</h2>
        <Link
          to="/login"
          className="flex justify-center mt-3 py-2 w-full bg-black text-white rounded-lg font-semibold text-lg">
          Continue
        </Link>
      </div>
    </div>
  )
};

export default Home;
