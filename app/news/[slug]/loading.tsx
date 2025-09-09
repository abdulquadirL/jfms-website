export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 rounded w-3/4 mb-6"></div>
        <div className="h-64 bg-gray-300 rounded mb-6"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
}
