"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { loginUser, signInWithGoogle } from "../firebase/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    try {
      await loginUser(email, password);
      router.push("/home");
      setError("");
    } catch (error) {
      console.error(error);
      setError("Invalid email or password. Please try again.");
    }

    setCredentials({
      email: "",
      password: "",
    });
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;

      router.push("/home");
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError("There was an error signing in with Google. Please try again.");
    }
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
          <h1 className="text-4xl font-bold text-center mb-8">Login</h1>

          {/* Login Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white p-6 rounded-lg shadow-md"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
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

            <Button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200">
              Login
            </Button>

            {error && (
              <div className="mt-4 text-center text-red-600 bg-red-100 border border-red-400 rounded-md py-2 px-4">
                {error}
              </div>
            )}
          </form>

          <div className="mt-4 flex justify-center">
            <Button
              onClick={handleGoogleSignIn}
              className="text-blue-500 hover:underline flex items-center justify-center bg-blue-600 text-white rounded-xl p-5 shadow-md mt-2"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png"
                alt="Google Icon"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
