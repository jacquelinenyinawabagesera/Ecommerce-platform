"use client";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "../shared-components/Button";
import { Input } from "../shared-components/Input";
import { Footer } from "../shared-components/Footer";
import { Header } from "../shared-components/SignUpHeader";
import Image from "next/image";

export default function SignIn() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-col md:flex-row items-center md:items-start gap-40 py-12">
        <div className="flex">
          <Image
            src="/Images/SideImage.png"
            alt="Cart and a smartphone"
            width={900}
            height={500}
            className="max-w-full h-auto"
          />
        </div>

        <div className="flex-1 flex items-center p-8 lg:p-16 bg-white">
          <div className="w-full max-w-md">
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-medium text-black mb-2">
                  Log in to Exclusive
                </h1>
                <p className="text-black text-base">
                  Enter your details below
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="email"
                      placeholder="Email or Phone Number"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12 text-base border-0 border-b-2 border-gray-200 rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-red-500 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="h-12 text-base border-0 border-b-2 border-gray-200 rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-red-500 placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white text-base font-medium rounded-sm h-12 px-8"
                  >
                    Log In
                  </Button>
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-600 text-base"
                  >
                    Forget Password?
                  </button>
                </div>
              </form>
              <div className="text-center">
                <span className="text-gray-600">Don&#39;t have an account? </span>
                <Link href="/signup" className="text-black font-medium underline hover:no-underline">
                  Create account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}