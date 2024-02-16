import { Button } from '@/app/ui/button';
import { createForm } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/lib/auth';
import React, { useState } from 'react';

const scores = ['How POSITIVE are you feeling? [Score 1 if not very and 5 if extremely]', 'How GOOD are you feeling? [Score 1 if not very and 5 if extremely]', 'How PLEASANT are you feeling? [Score 1 if not very and 5 if extremely]', 'How HAPPY are you feeling? [Score 1 if not very and 5 if extremely]', 'How JOYFUL are you feeling? [Score 1 if not very and 5 if extremely]', 'How CONTENT are you feeling? [Score 1 if not very and 5 if extremely]', 'How NEGATIVE are you feeling? [Score 1 if not very and 5 if extremely]', 'How BAD are you feeling? [Score 1 if not very and 5 if extremely]', 'How UNPLEASANT are you feeling? [Score 1 if not very and 5 if extremely]', 'How SAD are you feeling? [Score 1 if not very and 5 if extremely]', 'How AFRAID are you feeling? [Score 1 if not very and 5 if extremely]', 'How ANGRY are you feeling? [Score 1 if not very and 5 if extremely]']

function RadioButtons() {
  // const [positive, setPositive] = useState('');
  // const [good, setGood] = useState('');
  // const [pleasant, setPleasant] = useState('');
  // const [happy, setHappy] = useState('');
  // const [joyful, setJoyful] = useState('');
  // const [content, setContent] = useState('');
  // const [negative, setNegative] = useState('');
// up to here
// https://vercel.com/guides/nextjs-prisma-postgres
  
  return (
    <div>
      {scores.map((score, index) => (
        <fieldset key={index}>
          <legend className="mb-2 block text-sm font-medium">
            {score}
          </legend>
          <div className='flex rounded-md border border-gray-200 by-white px&#91;14px&#93; py-3 justify-center'>
            <div className='flex gap-4 items-center'>
              <div className="flex items-center">
                <input 
                  // onChange={set}
                  id={`1-${index}`}
                  name={`score-${index}`}
                  type="radio"
                  value="1"
                  className='h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2'
                  required
                />
                <label 
                  htmlFor={`1-${index}`}
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    1
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  id={`2-${index}`}
                  name={`score-${index}`}
                  type="radio"
                  value="2"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  required
                />
                <label
                  htmlFor={`2-${index}`}
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  2 
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  id={`3-${index}`}
                  name={`score-${index}`}
                  type="radio"
                  value="3"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  required
                />
                <label
                  htmlFor={`3-${index}`}
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-orange-200 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  3 
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  id={`4-${index}`}
                  name={`score-${index}`}
                  type="radio"
                  value="4"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  required
                />
                <label
                  htmlFor={`4-${index}`}
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-orange-300 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  4 
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  id={`5-${index}`}
                  name={`score-${index}`}
                  type="radio"
                  value="5"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  required
                />
                <label
                  htmlFor={`5-${index}`}
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-orange-400 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  5
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      ))}
    </div>
  );
}

export default function Form() {
  return (
    <main>
      <div className="flex h-50 shrink-0 items-end rounded-lg bg-orange-500 p-4 md:h-20">
        <h1>Please score each emotion by the intensity you feel it, 1: low intensity, 5: high intensity.</h1>
      </div>
      <form action={createForm}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          <div>
            <RadioButtons/>
            <Button type="submit">Submit Form</Button>
          </div>
        </div>
      </form>
    </main>
  )
}


// export default function Form() {
//   const submitData = async (e: React.SyntheticEvent) => {
//     e.preventDefault();
//     // TODO
//     // You will implement this next ...
//   };
//   return (
//     <main>
//       <div className="flex h-50 shrink-0 items-end rounded-lg bg-orange-500 p-4 md:h-20">
//         <h1>Please score each emotion by the intensity you feel it, 1: low intensity, 5: high intensity.</h1>
//       </div>
//       <form onSubmit={submitData}>
//         <div className="rounded-md bg-gray-50 p-4 md:p-6">
//           <div>
//             <RadioButtons
//             />
//             <Button type="submit">Submit Form</Button>
//           </div>
//         </div>
//       </form>
//     </main>
//   )
// }