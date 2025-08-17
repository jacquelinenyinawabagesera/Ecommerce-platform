"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../shared-components/Button";
import { Input } from "../shared-components/Input";
import { Footer } from "../shared-components/Footer";
import { Header } from "../shared-components/SignUpHeader";
import Image from "next/image";

export default function SignUp() {
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

    const handleGoogleSignUp = () => {
        console.log("Google sign up clicked");
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />

            <main className="flex flex-col md:flex-row items-center md:items-start gap-12 py-12 container mx-auto">
                <div className="hidden md:flex flex-1 justify-center">
                    <Image
                        src="/Images/SideImage.png"
                        alt="Shopping illustration"
                        width={400}
                        height={400}
                        className="rounded-xl shadow-lg object-cover"
                        priority
                    />
                </div>

                <section className="flex-1 flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
                    <div className="w-full max-w-md">
                        <div className="space-y-8">
                            <div className="text-center">
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                    Create an account
                                </h1>
                                <p className="text-gray-600 text-base">Enter your details below</p>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="h-12 text-base border-0 border-b-2 border-gray-300 rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-red-500 placeholder:text-gray-400"
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="h-12 text-base border-0 border-b-2 border-gray-300 rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-red-500 placeholder:text-gray-400"
                                />
                                <Input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                    className="h-12 text-base border-0 border-b-2 border-gray-300 rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-red-500 placeholder:text-gray-400"
                                />
                                <Button
                                    type="submit"
                                    className="w-full h-12 bg-red-500 hover:bg-red-600 text-white text-base font-semibold rounded"
                                >
                                    Create Account
                                </Button>
                                <Button
                                    type="button"
                                    onClick={handleGoogleSignUp}
                                    variant="outline"
                                    className="w-full h-12 border-gray-300 text-gray-700 text-base font-medium rounded hover:bg-gray-100 flex items-center justify-center gap-3"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            fill="#4285F4"
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        />
                                        <path
                                            fill="#34A853"
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        />
                                        <path
                                            fill="#FBBC05"
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        />
                                        <path
                                            fill="#EA4335"
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        />
                                    </svg>
                                    Sign up with Google
                                </Button>
                            </form>
                            <div className="text-center pt-4">
                                <span className="text-gray-600">Already have an account?</span>
                                <Link href="/login" className="text-red-500 font-medium underline ml-2 hover:no-underline">
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}