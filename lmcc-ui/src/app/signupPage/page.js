"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, createUser } from "../firebase/firebase";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { email, password, confirmPassword } = credentials;
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const user = await createUser(email, password);
      console.log(user);
      router.push("/home");
    } catch (error) {
      console.error(error);
      setError("Signup failed. Please try again.");
      setLoading(false);
    }

    setCredentials({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in:", user);
      router.push("/home");
    } catch (error) {
      console.error("Error signing in with Google:", error);
      setError("Google signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <div className="hidden md:flex md:w-1/2 relative">
        <img
          src="https://pbs.twimg.com/profile_images/1109866463614119937/DwKZikZq_400x400.png"
          alt="Signup Background"
          className="object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h1 className="text-4xl font-bold text-center mb-8">Sign Up</h1>

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

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={credentials.confirmPassword}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded-md text-center mt-4 border border-red-300">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </Button>
          </form>

          <div className="mt-4 flex justify-center">
            <p className="text-sm text-gray-600">
              <Button
                onClick={signInWithGoogle}
                className="text-blue-500 hover:underline flex items-center justify-center bg-blue-600 text-white rounded-xl p-5 shadow-md mt-2"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png"
                  alt="Google Icon"
                  className="w-5 h-5 mr-2"
                />
                Sign up with Google
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
