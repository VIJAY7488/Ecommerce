
// import Navbar from "../components/Navbar";
import RegisterForm from "@/components/auth/RegisterForm";
import { Link } from "react-router-dom";
// import Footer from "../components/Footer";

const Register = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="max-w-md mx-auto text-center mb-8 animate-slide-down">
            <h1 className="text-3xl font-bold mb-2">Create an Account</h1>
            <p className="text-gray-500">
              Shop Now
            </p>
          </div>

          <div className="animate-slide-up">
            <RegisterForm />
          </div>

          <div className="mt-8 text-center animate-fade-in">
            <p className="text-gray-500">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                onClick={() => {scrollTo({top:0, behavior: 'smooth'})}}
                className="text-[hsl(210,100%,50%)]
              hover:underline font-medium"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Register;