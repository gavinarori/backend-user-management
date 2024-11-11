'use client';

import React, { useState } from 'react';
import { signUp } from '../actions/users/signUp';

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        setMessage("Signing up...");
        const message = await signUp(email, password);
        setMessage(message);
    };

    return (
<div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center w-full">
  <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">
                  Sign up
              </h1>
              <div className="w-full flex-1 mt-8">
                  <div className="mx-auto max-w-xs">
                      <input
                          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-200 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                          type="email" placeholder="Email" />
                      <input
                          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-200 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                          type="password" placeholder="Password" />
                          
                      <button
                          className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                          <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round">
                              <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                              <circle cx="8.5" cy="7" r="4" />
                              <path d="M20 8v6M23 11h-6" />
                          </svg>
                          <span className="ml-3">
                              Sign Up
                          </span>
                      </button>
                      <p className="mt-6 text-xs text-gray-600 text-center">
                                 have an account ?
                                <a href="/auth/signin" className="border-b border-gray-500 ml-2 text-blue-500 border-dotted">
                                    sign in
                                </a>
                            </p>
                  </div>
              </div>
          </div>
      </div>
      <div className="flex-1 bg-gray-200 text-center hidden lg:flex">
  <div 
    className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
    style={{ backgroundImage: "url('https://img.freepik.com/free-vector/telecommuting-concept-smiley-man_23-2148497411.jpg?t=st=1728301153~exp=1728304753~hmac=6c72b780cb73fdf86c7b7901a105910724d930fe2ba5b12295d43471b4ed3c7f&w=740')" }}
  >
  </div>
</div>

  </div>
</div>
       
    );
};

export default SignUpForm;
