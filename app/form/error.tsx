'use client'; // marking exported functions as client functions

// don't actually use this just yet, as no way to try to delete forms

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: { // these are the properties, feature of typescript, error and reset
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // optionally log the error ro an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-orange-500 px-4 py-2 text-sm text-white transition-colors hoer:bg-orange-400"
        onClick={
          // attempt to recover by trying to re-render the form route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}