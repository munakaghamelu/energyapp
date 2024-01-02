'use server';

export async function createForm(formData: FormData) {
  const rawFormData = {
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
  };

  console.log(rawFormData);
}