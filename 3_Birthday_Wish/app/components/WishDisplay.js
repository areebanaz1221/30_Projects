"use client";

const WishDisplay = ({ name, message }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold text-blue-600">{name}</h2>
      <p className="text-lg my-4 text-gray-700">{message}</p>
      <button
        className="bg-yellow-500 text-white py-2 px-4 rounded shadow-md hover:bg-yellow-400 transition duration-200"
        onClick={() => navigator.share({ title: "Birthday Wish", text: message })}
      >
        Share Wish
      </button>
    </div>
  );
};

export default WishDisplay;
