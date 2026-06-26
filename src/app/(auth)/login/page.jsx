import React from 'react';

const LogInPage = () => {
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 my-6 sm:my-8 lg:my-10">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-xl sm:text-3xl text-center">
          Login Your Account
        </h2>
        <div>
          <form>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <legend className="fieldset-legend">Login</legend>

              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />

              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />

              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;