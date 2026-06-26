import Link from 'next/link';
import React from 'react';

const LogInPage = () => {
  
  return (
    <div className="container mx-auto  flex justify-center items-center my-6 sm:my-8 lg:my-10">
      <div className="p-2 sm:p-8  rounded-xl  bg-slate-100">
        <h2 className="font-bold text-lg sm:text-2xl  text-left">
          Login Your Account
        </h2>
        <div className="border my-2 sm:my-4 border-gray-200"></div>
        <div className=" p-2 sm:p-4 md:p-6 ">
          <form className="">
            <fieldset className="fieldset bg-base-200 w-xs sm:w-lg border-base-300 rounded-box text-lg border  p-5">
              <legend className="fieldset-legend">Login</legend>

              <label className="label font-semibold">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
              />

              <label className="label font-semibold">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
              />

              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            
          </form>
          <p className='pt-2 sm:pt-3 md:pt-5 font-medium text-base sm:text-lg text-center'>Don't have an Account? <Link className='text-red-600 hover:underline ' href={'/register'}>Register</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;