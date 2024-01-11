'use client';

import { Button } from '@/app/ui/button';
import { createForm } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

const scores = ['Positive Score', 'Good Score', 'Pleasant Score', 'Happy Score', 'Joyful Score', 'Contented Score', 'Negative Score', 'Bad Score', 'Unpleasant Score', 'Sad Score', 'Afraid Score', 'Angry Score']

function RadioButtons() {
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
          {/* <div>
            <form
            action={async () => {
              'use server';
              await signOut();
            }}
            >
              <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                <PowerIcon className="w-6" />
                <div className="hidden md:block">Sign Out</div>
              </button>
            </form>
          </div> */}
        </div>
      </form>
    </main>
  )
}