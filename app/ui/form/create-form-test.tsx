'use client';

import { Button } from '@/app/ui/button';
import { State, createForm } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { useState } from 'react';

const scores = ['Positive Score', 'Good Score', 'Pleasant Score', 'Happy Score', 'Joyful Score', 'Contented Score', 'Negative Score', 'Bad Score', 'Unpleasant Score', 'Sad Score', 'Afraid Score', 'Angry Score']

function RadioButtons({key, name, index, value, setValue, error}) {
  return (
    <fieldset aria-describedby={`${name}-error`}>
      <legend className="mb-2 block text-sm font-medium">
        {key}
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
      {error && (
        <div id={`${name}-error`} className='text-red-500'>
          {error}
        </div>
      )}
    </fieldset>
  );
}

export default function Form() {
  const initialState = {errors: {}, message: null};
  const [state, dispatch] = useState(initialState);
  const [selectedValues, setSelectedValues] = useState(Array(scores.length).fill(''));
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if any radio button is not selected
    const errors: State['errors'] = {};
    selectedValues.forEach((value, index) => {
      if (!value) {
        errors[scores[index]] = ['Please select an intensity value.'];
      }
    });
    // Update the form state with the errors
    dispatch({ errors, message: 'Missing Fields. Failed to Create Form.' });

    // Submit the form if there are no errors
    if (Object.keys(errors).length === 0) {
      const formData = new FormData(event.currentTarget);
      const result = await createForm(initialState, formData);
      dispatch(result);
    }
  };
  // const [state, dispatch] = useFormState<State, FormData>(createForm, initialState);
  return (
    <main>
      <div className="flex h-50 shrink-0 items-end rounded-lg bg-orange-500 p-4 md:h-20">
        <h1>Please score each emotion by the intensity you feel it, 1: low intensity, 5: high intensity.</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          <div>
          {scores.map((score, index) => (
              <RadioButtons
                key={score}
                name={`score-${index}`}
                index={index}
                value={selectedValues[index]}
                setValue={(value) => {
                  const newSelectedValues = [...selectedValues];
                  newSelectedValues[index] = value;
                  setSelectedValues(newSelectedValues);
                }}
                error={state.errors?.[score]?.[0]}
              />
            ))}            <Button type="submit">Submit Form</Button>
          </div>
        </div>

      </form>
    </main>
  )
}