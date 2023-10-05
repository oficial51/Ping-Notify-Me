import "./App.css";
import ping from "./assets/logo.svg";
import bg from "./assets/illustration-dashboard.png";
import { useFormik } from "formik";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

const inputClasses =
  "border border-[#D4D7DE] w-[282px] lg:w-[422px] lg:h-[57px] rounded-full focus:outline-none focus:border focus:border-[#4D7BF3] pl-[32px] py-[9px]";
const inputClassesError =
  "border border-red-500 w-[282px] lg:w-[422px] lg:h-[57px] rounded-full focus:outline-none focus:border focus:border-[#4D7BF3] pl-[32px] py-[9px]";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please provide a valid email address";
  }
  return errors;
};

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validate,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <main className="w-screen flex justify-center">
      <section className=" mt-[85px] lg:mt-[70px] flex items-center flex-col">
        <img
          src={ping}
          className="w-[55px] lg:w-[86px] lg:h-[26px] h-[16px]"
          alt="Ping logo"
        />
        <h1 className="mt-[37px] lg:mt-[33px] lg:text-[47px] text-[21px] text-[#939393]">
          We are launching{" "}
          <span className="text-[#182130] font-bold">soon!</span>
        </h1>
        <h3 className="mt-[20px] lg:mt-[10px] text-[#333534] lg:text-[18px] text-[13px]">
          Subscribe and get notified
        </h3>

        <form
          className="mt-[32px] lg:flex-row lg:gap-[20px] flex flex-col"
          onSubmit={formik.handleSubmit}
        >
          <div className="lg:flex-col">
            {" "}
            <input
              className={formik.errors.email ? inputClassesError : inputClasses}
              placeholder={
                formik.errors.email
                  ? "example@email/com"
                  : "Your email address..."
              }
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <div className="text-red-400 lg:absolute  text-[12px] my-1 lg:text-start lg:ml-8 text-center">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-[282px] hover:bg-[#6F96F5] transition-all ease-in-out duration-200 lg:w-[202px] lg:h-[57px] lg:mt-0 mt-[11px] shadow-xl text-white bg-[#4D7BF3] rounded-full py-[9px]"
          >
            Notify Me
          </button>
        </form>
        <img
          className="mt-[70px] lg:mt-[60px] lg:w-[645px] lg:h-[391px] h-[195px] w-[320px]"
          src={bg}
          alt="background-dashboard"
        />
        <div className="flex mt-[110px] lg:mt-[50px] text-[#6976D4] gap-[12px]">
          <div className="p-1 border hover:text-white hover:bg-[#6976D4] transition-all ease-in-out duration-200 rounded-full border-[#EEEFE9]">
            <BiLogoFacebook className="w-[30px] h-[30px]  " />
          </div>
          <div className="p-1 border hover:text-white hover:bg-[#6976D4] transition-all ease-in-out duration-200 rounded-full border-[#EEEFE9]">
            <AiOutlineTwitter className="w-[30px] h-[30px]  " />
          </div>
          <div className="p-1 border hover:text-white hover:bg-[#6976D4] transition-all ease-in-out duration-200 rounded-full border-[#EEEFE9]">
            <AiOutlineInstagram className="w-[30px] h-[30px]  " />
          </div>
        </div>
        <div className="text-[#BBBBBB] text-[13px] mt-[20px]">
          © Copyright Ping. All rights reserved.{" "}
        </div>
      </section>
    </main>
  );
}

export default App;
