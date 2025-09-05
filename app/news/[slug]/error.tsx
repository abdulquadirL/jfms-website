"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Oops! Something went wrong
      </h2>
      <p className="text-gray-600 mb-6">{error.message || "Failed to load the article."}</p>
      <button
        onClick={() => reset()}
        className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition"
      >
        Try again
      </button>
    </div>
  );
}
