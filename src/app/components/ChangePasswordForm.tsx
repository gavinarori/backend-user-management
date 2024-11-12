"use client";
import React, { useState } from 'react'
import { changePassword } from '../actions/users/changePassword';

interface ChangePasswordFormProps {
    resetPasswordToken: string;
}

const ChangePasswordForm = ({resetPasswordToken}: ChangePasswordFormProps) => {

    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [message, setMessage] = useState<string>("");

    const handleSubmit = async () => {
        if(password !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        const message = await changePassword(resetPasswordToken, password);

        setMessage(message);
    }

  return (
    <main id="content" role="main" className="w-full  max-w-md mx-auto p-6">
    <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Change Password?</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Remember your password?
            <a className="text-blue-600 decoration-2 hover:underline font-medium" href="/auth/signin">
              Login here
            </a>
          </p>
        </div>

        <div className="mt-5">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-y-4">
              <div>
                <label  className="block text-sm font-bold ml-1 mb-2 dark:text-white">New password</label>
                <div className="relative">
                  <input type="password" id="password" name="password" placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" />
                </div>
                <label  className="block text-sm font-bold ml-1 mb-2 dark:text-white">Confirm password</label>
                <div className="relative">
                  <input type="password" id="password" name="password" placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" />
                </div>
                <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
              </div>
              <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Reset password</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  </main>
  )
}

export default ChangePasswordForm