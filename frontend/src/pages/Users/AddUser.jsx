import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registerSchema} from "../../schema/formSchema";
import "./users.scss"

const textInputClassName =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const formSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="md:w-[500px] shadow-sm shadow-white bg-white w-[320px] mx-auto px-7 py-4 rounded-xl">
      <h1>Add User FORM</h1>

      <form
        onSubmit={handleSubmit(formSubmitHandler)}
        className="w-full register-form"
      >
        <div className="login-wrapper">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Full Name
            </label>
            <input
              {...register("email")}
              type="text"
              name="name"
              id="name"
              className={textInputClassName}
              placeholder="Full Name"
            />
            {errors.email ? (
              <span className="text-red-900">name is required</span>
            ) : (
              <></>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              {...register("email")}
              type="text"
              name="email"
              id="email"
              className={textInputClassName}
              placeholder="test@test.com"
            />
            {errors.email ? (
              <span className="text-red-900">{errors.email.message}</span>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="login-wrapper">
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              {...register("password")}
              type="password"
              name="password"
              id="password"
              className={textInputClassName}
            />
            {errors.password ? (
              <span className="text-red-900">{errors.password.message}</span>
            ) : (
              <></>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Confirm Password
            </label>
            <input
              {...register("confirmPassword")}
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              className={textInputClassName}
            />
            {errors.confirmPassword ? (
              <span className="text-red-900">
                {errors.confirmPassword.message}
              </span>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="accountType"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Select an option
          </label>
          <select
            {...register("accountType")}
            name="accountType"
            id="accountType"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="" selected="true" disabled>
              Gender
            </option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>{" "}
          {errors.accountType ? (
            <span className="text-red-900">{errors.accountType.message}</span>
          ) : (
            <></>
          )}
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;