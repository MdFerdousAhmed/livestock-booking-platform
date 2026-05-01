export default function BookingForm() {
  return (
    <div className="max-w-lg bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 grid space-y-4 container mx-auto p-4 justify-center items-center">
      <h2 className="text-2xl font-bold text-center mb-6">Booking Form</h2>

      <form className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label className="block mb-1 font-medium">Address</label>
          <textarea
            placeholder="Enter your address"
            rows="3"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}