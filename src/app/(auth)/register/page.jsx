'use client';
import AnimatedButton from '@/components/ui/animated-button';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const RegisterPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async (data) => {
    const { email, password, image, name } = data;

    // ✅ Password validation
    if (password.length < 8) {
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

    // ✅ after signup show success msg
    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: image,
      callbackURL: '/',
    });
    console.log('res and error', res, error);

    if (error) {
      alert(error.message || 'Registration failed. Please try again.');
      return;
    }

    //
    alert('Registered Successfully!');
    reset();
  };

  return (
    <div className="container mx-auto flex justify-center py-1 sm:py-3 md:py-5 items-center my-6 sm:my-8 lg:my-10">
      <div className="p-2 sm:p-8 rounded-xl bg-slate-100">
        <h2 className="font-bold text-lg sm:text-2xl text-left">
          Register Your Account
        </h2>
        <div className="border my-2 sm:my-4 border-gray-200"></div>
        <div className="p-2 sm:p-4 md:p-6">
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <fieldset className="fieldset bg-base-200 w-xs sm:w-lg border-base-300 rounded-box text-lg border p-5">
              <legend className="fieldset-legend">Register</legend>

              {/* Name */}
              <label className="label font-semibold">Name</label>
              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                className="input w-full"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-600 text-left italic text-xs">
                  {errors.name.message}
                </p>
              )}

              {/* Email */}
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

              {/* ✅ Fixed: 'photo' → 'image' */}
              <label className="label font-semibold">Photo URL</label>
              <input
                {...register('image', {
                  required: 'Photo URL is required',
                  validate: (value) => {
                    try {
                      new URL(value);
                      return true;
                    } catch {
                      return 'Please enter a valid URL';
                    }
                  },
                })}
                type="url"
                className="input w-full "
                placeholder="https://example.com/your-photo.jpg"
              />
              {errors.image && (
                <p className="text-red-600 text-left italic text-xs">
                  {errors.image.message}
                </p>
              )}

              {/* Password */}
              <label className="label font-semibold">Password</label>
              <div className="relative">
                <input
                  {...register('password', {
                    required: 'Password is required',
                  })}
                  type={isShowPassword ? 'text' : 'password'}
                  className="input w-full"
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
                <p className="text-red-600 text-left italic text-xs">
                  {errors.password.message}
                </p>
              )}

              <AnimatedButton className="w-30 mx-auto my-8 cursor-pointer hover:scale-105 transform transition duration-200 text-lg font-bold bg-red-600 hover:bg-red-700 text-white">
                Register
              </AnimatedButton>
            </fieldset>
          </form>

          <p className="pt-2 sm:pt-3 md:pt-5 font-medium text-base sm:text-lg text-center">
            Already have an account?{' '}
            <Link className="text-red-600 hover:underline" href={'/login'}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
