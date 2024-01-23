// 'use server';

// import { z } from 'zod';
// import { sql } from '@vercel/postgres';
// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
// import { signIn } from '@/lib/auth';
// import { AuthError } from 'next-auth';

// export async function authenticate(
//   prevState: string | undefined,
//   formData: FormData,
// ) {
//   try {
//     await signIn('credentials', formData);
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case 'CredentialsSignin':
//           return 'Invalid credentails.';
//         default:
//           return 'Something went wrong.';
//       }
//     }
//     throw error;
//   }
// }

// const FormSchema = z.object({
//   id: z.string(),
//   user_id: z.string(),
//   positive: z.enum(['1','2','3','4','5']),
//   good: z.enum(['1','2','3','4','5']),
//   pleasant: z.enum(['1','2','3','4','5']),
//   happy: z.enum(['1','2','3','4','5']),
//   joyful: z.enum(['1','2','3','4','5']),
//   contented: z.enum(['1','2','3','4','5']),
//   negative: z.enum(['1','2','3','4','5']),
//   bad: z.enum(['1','2','3','4','5']),
//   unpleasant: z.enum(['1','2','3','4','5']),
//   sad: z.enum(['1','2','3','4','5']),
//   afraid: z.enum(['1','2','3','4','5']),
//   angry: z.enum(['1','2','3','4','5']),
// });

// const CreateForm = FormSchema.omit({ id: true, user_id: true});

// export async function createForm(formData: FormData) {
//   const {positive, good, pleasant, happy, joyful, contented, negative, bad, unpleasant, sad, afraid, angry} = CreateForm.parse({
//     // user_id: formData.get('score-0'),
//     positive: formData.get('score-0'),
//     good: formData.get('score-1'),
//     pleasant: formData.get('score-2'),
//     happy: formData.get('score-3'),
//     joyful: formData.get('score-4'),
//     contented: formData.get('score-5'),
//     negative: formData.get('score-6'),
//     bad: formData.get('score-7'),
//     unpleasant: formData.get('score-8'),
//     sad: formData.get('score-9'),
//     afraid: formData.get('score-10'),
//     angry: formData.get('score-11'),
//   });
//   // console.log(rawFormData);

//   //insert form data into db
//   await sql`
//     INSERT INTO forms (user_id, positive, good, pleasant, happy, joyful, contented, negative, bad, unpleasant, sad, afraid, angry)
//     VALUES ('410544b2-4001-4271-9855-fec4b6a6442a', ${positive}, ${good}, ${pleasant}, ${happy}, ${joyful}, ${contented}, ${negative}, ${bad}, ${unpleasant}, ${sad}, ${afraid}, ${angry})
//   `;

//   revalidatePath('/form/create');
//   redirect('/form');
// }