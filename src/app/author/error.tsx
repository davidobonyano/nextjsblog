'use client'; 

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-4 text-red-600">
      <h2 className="text-xl font-bold">Something went wrong!</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}
