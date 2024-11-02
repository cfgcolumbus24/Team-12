"use client";

import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from 'next/link';

export default function LoginPage() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    setCredentials({
      email: '',
      password: '',
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <div className="hidden md:flex md:w-1/2 relative">
        <img
          src="https://pbs.twimg.com/profile_images/1109866463614119937/DwKZikZq_400x400.png" 
          alt="Login Background"
          layout="fill"
          className="object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h1 className="text-4xl font-bold text-center mb-8"> Login</h1>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                value={credentials.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                type="password"
                name="password"
                id="password"
                value={credentials.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Login
            </Button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
                <Link href="/register" className="text-blue-500 hover:underline flex items-center justify-center bg-blue-600 text-white rounded-lg p-2 shadow-md">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png" alt="Google Icon" className="w-5 h-5 mr-2" />
                    Sign in with Google
                </Link>
            </p>
        </div>

        </div>
      </div>
    </div>
  );
}
