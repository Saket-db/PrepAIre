import React from "react";
import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24">
        <div className="gap-0 md:gap-8  flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* Left column container with background */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
          <h2 className="text-4xl font-bold mb-3 flex justify-center align-center pr-2">Welcome to</h2>
            <img
              src="https://res.cloudinary.com/dyy1u7wvc/image/upload/v1749641075/Logo_Name_Tagline_fc4kd5.png"
              className="w-full"
              alt="Phone image"
            />
          </div>

          {/* Right column container with form */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12 translate-y-12 md:translate-y-0  mt-0 md:-mt-2">
          {/* <h2 className="text-4xl font-bold mb-3 flex justify-center align-center pr-2">Sign In</h2> */}
            {/* SignIn component from Clerk */}
            <SignIn />
          </div>
        </div>
      </div>
    </section>
  );
}