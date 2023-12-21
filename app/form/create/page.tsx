import Form from '@/app/ui/form/create-form';
import Breadcrumbs from '../../ui/form/breadcrumbs';

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Form', href: '/form'},
          {
            label: 'Create Form',
            href: '/form/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  )
}

// export default function Page() {
//   return (
//     <main className="flex min-h-screen flex-col p-6">
//       <div className="flex h-50 shrink-0 items-end rounded-lg bg-orange-500 p-4 md:h-20">
//       </div>

//       <form>
//         <div className="grid gap-6 mb-6 md:grid-cols-2">
//           <div>
//             <label htmlFor="postive-score" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Positive Score</label>
//             <input type="number" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min=1 max=5" />
//           </div>
//           <div>
//             <label htmlFor="good-score" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Good Score</label>
//             <input type="number" id="good-score" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min=1 max=5" />
//           </div>
//           <div>
//             <label htmlFor="pleasant-score" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pleasant Score</label>
//             <input type="number" id="pleasant-score" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min=1 max=5" />
//           </div>
//           <div>
//             <label htmlFor="happy-score" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Happy Score</label>
//             <input type="number" id="happy-score" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min=1 max=5" />
//           </div>
//           <div>
//             <label htmlFor="joyful-score" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Joyful Score</label>
//             <input type="number" id="joyful-score" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min=1 max=5" />
//           </div>
//           <div>
//             <label htmlFor="contented-score" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contented Score</label>
//             <input type="number" id="contented-score" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min=1 max=5" />
//           </div>
//         </div>
//       </form>

//       <form>
//         <div className="grid gap-6 mb-6 md:grid-cols-2">
//           <div>
//             <label htmlFor="negative-score" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Negative Score</label>
//             <input type="number" id="negative-score" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
//           </div>
//           <div>
//             <label htmlFor="bad-score" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bad Score</label>
//             <input type="number" id="bad-score" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min=1 max=5" />
//           </div>
//           <div>
//             <label htmlFor="unpleasant-score" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unpleasant Score</label>
//             <input type="number" id="unpleasant-score" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min=1 max=5" />
//           </div>
//           <div>
//             <label htmlFor="sad-score" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sad Score</label>
//             <input type="number" id="sad-score" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min=1 max=5" />
//           </div>
//           <div>
//             <label htmlFor="afraid-score" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Afraid Score</label>
//             <input type="number" id="afraid-score" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min=1 max=5" />
//           </div>
//           <div>
//             <label htmlFor="angry-score" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Angry Score</label>
//             <input type="number" id="angry-score" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min=1 max=5" />
//           </div>
//         </div>
//         <button type="submit" className="text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Submit</button>
//       </form>
      
//     </main>
//   );
// };
