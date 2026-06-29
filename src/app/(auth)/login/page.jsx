'use client';
import { authClient } from '@/lib/auth-client';
import { Description } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AnimatedButton from '@/components/ui/animated-button';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LogInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = async (data) => {
    const { email, password } = data;

    // e.preventDefault();

    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(email, password);
    if (data.password.length < 8) {
      alert('Password must be at least 8 characters');
      return;
    }

    if (!/[A-Z]/.test(data.password)) {
      alert('Password must contain at least one uppercase letter');
      return;
    }

    if (!/[0-9]/.test(data.password)) {
      alert('Password must contain at least one number');
      return;
    }
    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: 'http://localhost:3000/category/01',
    });

    if (error) {
      alert(error.message || 'Login failed. Please try again.');
      return;
    }

    //
    alert('Login Successfully!');
    reset();
  };
  //console.log(errors, 'error');
  //console.log(watch('email'));
  //console.log(watch('password'));
  return (
    <div className="container mx-auto  flex justify-center items-center my-6 sm:my-8 lg:my-10">
      <div className="p-2 sm:p-8  rounded-xl  bg-slate-100">
        <h2 className="font-bold text-lg sm:text-2xl  text-left">
          Login Your Account
        </h2>
        <div className="border my-2 sm:my-4 border-gray-200"></div>
        <div className=" p-2 sm:p-4 md:p-6 ">
          <form className="" onSubmit={handleSubmit(handleFormSubmit)}>
            <fieldset className="fieldset bg-base-200 w-xs sm:w-lg border-base-300 rounded-box text-lg border  p-5">
              <legend className="fieldset-legend">Login</legend>

              <label className="label font-semibold">Email</label>
              <input
                {...register('email', { required: 'Email is required' })}
                type="email"
                className="input w-full"
                placeholder="Email"
              />

              {errors.email && (
                <p className="text-red-600 text-left italic">
                  {errors.email.message}
                </p>
              )}
              <label className="label font-semibold">Password</label>
              <div className="relative">
                <input
                  {...register('password', {
                    required: 'Password is required',
                  })}
                  type={isShowPassword ? 'text' : 'password'}
                  className="input w-full pr-10"
                  placeholder="Password"
                />

                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                >
                  {isShowPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-600 text-left italic">
                  {errors.password.message}
                </p>
              )}

              <AnimatedButton className="w-30 mx-auto my-8 cursor-pointer hover:scale-105 transform transition duration-200 text-lg font-bold bg-red-600 hover:bg-red-700 text-white">
                Login
              </AnimatedButton>
            </fieldset>
          </form>
          <p className="pt-2 sm:pt-3 md:pt-5 font-medium text-base sm:text-lg text-center">
            Don't have an Account?{' '}
            <Link className="text-red-600 hover:underline " href={'/register'}>
              Register
            </Link>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
