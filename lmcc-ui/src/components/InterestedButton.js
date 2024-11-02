export default function InterestedButton({ interested, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="border bg-black text-white px-4 py-3 rounded-lg"
      >
        {interested ? "Interested  ✓" : "Not Interested  ✗"}
      </button>
    </div>
  );
}
