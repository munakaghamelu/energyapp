'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  positive: z.enum(['1','2','3','4','5'], {
    invalid_type_error: 'Please select an intensity value.',
  }),
  good: z.enum(['1','2','3','4','5'], {
    invalid_type_error: 'Please select an intensity value.',
  }),
  pleasant: z.enum(['1','2','3','4','5'], {
    invalid_type_error: 'Please select an intensity value.',
  }),
  happy: z.enum(['1','2','3','4','5'], {
    invalid_type_error: 'Please select an intensity value.',
  }),
  joyful: z.enum(['1','2','3','4','5'], {
    invalid_type_error: 'Please select an intensity value.',
  }),
  contented: z.enum(['1','2','3','4','5'], {
    invalid_type_error: 'Please select an intensity value.',
  }),
  negative: z.enum(['1','2','3','4','5'], {
    invalid_type_error: 'Please select an intensity value.',
  }),
  bad: z.enum(['1','2','3','4','5'], {
    invalid_type_error: 'Please select an intensity value.',
  }),
  unpleasant: z.enum(['1','2','3','4','5'], {
    invalid_type_error: 'Please select an intensity value.',
  }),
  sad: z.enum(['1','2','3','4','5'], {
    invalid_type_error: 'Please select an intensity value.',
  }),
  afraid: z.enum(['1','2','3','4','5'], {
    invalid_type_error: 'Please select an intensity value.',
  }),
  angry: z.enum(['1','2','3','4','5'], {
    invalid_type_error: 'Please select an intensity value.',
  }),
});

const CreateForm = FormSchema.omit({ id: true, user_id: true});
// temporary until @types/react-dom is updated
export type State = {
  errors?: {
    positive?: string[];
    good?: string[];
    pleasant?: string[];
    happy?: string[];
    joyful?: string[];
    contented?: string[];
    negative?: string[];
    bad?: string[];
    unpleasant?: string[];
    sad?: string[];
    afraid?: string[];
    angry?: string[];
  }
}
// change the createForm to accept two parameters, new state
export async function createForm(prevState: State, formData: FormData) {
  const validatedFields = CreateForm.safeParse({
    // user_id: formData.get('score-0'),
    positive: formData.get('score-0'),
    good: formData.get('score-1'),
    pleasant: formData.get('score-2'),
    happy: formData.get('score-3'),
    joyful: formData.get('score-4'),
    contented: formData.get('score-5'),
    negative: formData.get('score-6'),
    bad: formData.get('score-7'),
    unpleasant: formData.get('score-8'),
    sad: formData.get('score-9'),
    afraid: formData.get('score-10'),
    angry: formData.get('score-11'),
  });
  // console.log(rawFormData);

  // if form validation fails, return errors early, otherwise, continue
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Form.',
    };
  }

  // prepare database for insertion into the database
  const { positive, good, pleasant, happy, joyful, contented, negative, bad, unpleasant, sad, afraid, angry} = validatedFields.data;

  // insert form data into db
  try {
    await sql`
      INSERT INTO forms (user_id, positive, good, pleasant, happy, joyful, contented, negative, bad, unpleasant, sad, afraid, angry)
      VALUES ('410544b2-4001-4271-9855-fec4b6a6442a', ${positive}, ${good}, ${pleasant}, ${happy}, ${joyful}, ${contented}, ${negative}, ${bad}, ${unpleasant}, ${sad}, ${afraid}, ${angry})
    `;
  } catch (error) {
    // if a db error occurs, return a more specific error
    return {
      message: 'Database Error: Failed to Create Form.',
    };
  }

  // revalidate the cache for the form page and redirect the user
  revalidatePath('/form/create');
  redirect('/form');
}
