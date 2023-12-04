export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-50 shrink-0 items-end rounded-lg bg-orange-500 p-4 md:h-20">
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Contented</th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Positive</th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Pleasant</th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Good</th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Happy</th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Joyful</th>
            </tr>
          </thead>
        </table>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Unpleasant</th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Negative</th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Afraid</th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Angry</th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Bad</th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Sad</th>
            </tr>
          </thead>
        </table>
      </div>
    </main>

);
}