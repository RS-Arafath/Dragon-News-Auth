'use client';
import { authClient } from '@/lib/auth-client';
import { Description } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = async (data) => {
    //console.log(data);
const{email,password,photo,name}=data
   
    if (data.password.length < 6) {
      alert('Password must be at least 8 characters');
      return;
    }

    if (!/[A-Z]/.test(password)) {
      alert('Password must contain at least one uppercase letter');
      return;
    }

    if (!/[0-9]/.test(password)) {
      alert('Password must contain at least one number');
      return;
    }

    alert('Register Successfully');

    const success = true;

    if (success) {
      reset(); //
    }
    //signup connection
    const { data:res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: '/',
    });
    console.log('res and error',res,error);
  };
  //console.log(errors, 'error');
  //console.log(watch('email'));
  //console.log(watch('password'));

  return (
    <div className="container mx-auto  flex justify-center  py-1 sm:py-3 md:py-5 items-center my-6 sm:my-8 lg:my-10">
      <div className="p-2 sm:p-8  rounded-xl  bg-slate-100">
        <h2 className="font-bold text-lg sm:text-2xl  text-left">
          Register Your Account
        </h2>
        <div className="border my-2 sm:my-4 border-gray-200"></div>
        <div className=" p-2 sm:p-4 md:p-6 ">
          <form className="" onSubmit={handleSubmit(handleFormSubmit)}>
            <fieldset className="fieldset bg-base-200 w-xs sm:w-lg border-base-300 rounded-box text-lg border  p-5">
              <legend className="fieldset-legend"> Register</legend>
              {/* ~~~name~~~ */}
              <label className="label font-semibold">Name</label>
              <input
                {...register('name', { required: 'name is required' })}
                type="text"
                className="input w-full"
                placeholder="Enter your name"
              />

              {errors.name && (
                <p className="text-red-600 text-left italic  text-xs">
                  {errors.name.message}
                </p>
              )}

              {/* ~~~email~~~ */}
              <label className="label font-semibold">Email</label>
              <input
                {...register('email', { required: 'Email is required' })}
                type="email"
                className="input w-full"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-600 text-left italic text-xs">
                  {errors.email.message}
                </p>
              )}

              {/* ~~~url~~~ */}
              <label className="label font-semibold">Photo url</label>
              <input
                {...register('photo', { required: 'Photo url is required' })}
                type="text"
                className="input w-full"
                placeholder="Enter your photo url"
              />

              {errors.photo && (
                <p className="text-red-600 text-left italic  text-xs">
                  {errors.photo.message}
                </p>
              )}

              <label className="label font-semibold">Password</label>
              <input
                {...register('password', { required: 'Password is required' })}
                type="password"
                className="input w-full"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-600 text-left italic  text-xs">
                  {errors.password.message}
                </p>
              )}

              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
          <p className="pt-2 sm:pt-3 md:pt-5 font-medium text-base sm:text-lg text-center">
            Already have an account?{' '}
            <Link className="text-red-600 hover:underline " href={'/login'}>
              Login
            </Link>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
