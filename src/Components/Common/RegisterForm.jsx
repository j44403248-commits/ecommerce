import React from "react";

const RegisterForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <form className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        
        <h2 className="text-2xl font-semibold text-center mb-6">
          Sign Up to Start Earning
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Phone Number - full width */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* First Name */}
          <div>
            <label className="block text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 mb-1">Gender</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2">
              <option>Select your gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 mb-1">Address (Optional)</label>
            <input
              type="text"
              placeholder="Enter your address"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-gray-700 mb-1">Date of Birth</label>
            <div className="flex gap-2">
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                <option>Day</option>
              </select>
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                <option>Month</option>
              </select>
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                <option>Year</option>
              </select>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email (Optional)</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-black text-white py-3 rounded hover:bg-gray-800 transition"
        >
          Register
        </button>

      </form>
    </div>
  );
};

export default RegisterForm;