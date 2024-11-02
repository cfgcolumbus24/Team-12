import Attending from "./Attending";
export default function InterestedButton({ interested, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`px-4 py-3 rounded-lg border text-white transition duration-300 ease-in-out transform ${
          interested
            ? "bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 scale-105"
            : "bg-black border-black hover:bg-gray-800 hover:border-gray-800"
        }`}
      >
        {interested ? "Interested  ✓" : "Not Interested  ✗"}
      </button>
    </div>
  );
}
