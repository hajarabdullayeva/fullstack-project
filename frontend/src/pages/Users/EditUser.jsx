import React from 'react';
import {Button, WrapItem} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const EditUser = () => {
  return (
    <div>
      <div className="md:w-[500px] shadow-sm shadow-white bg-white w-[320px] mx-auto px-7 py-4 rounded-xl">
        <h1>Edit User</h1>

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
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <WrapItem>
              <Button colorScheme='pink'><Link to="/add-user">ADD</Link></Button>
            </WrapItem>
          </button>
        </form>
      </div>

    </div>
  );
};

export default EditUser;
