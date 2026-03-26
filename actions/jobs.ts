'use server';

export async function createJob(prevState: any, formData: FormData) {
  const position = formData.get('position') as string;
  const description = formData.get('description') as string;
  const company = formData.get('company') as string;
  const jobType = formData.get('jobType') as string;
  const salary = formData.get('salary') as string;

  // ✅ Validation
  const errors: Record<string, string> = {};

  if (!position) errors.position = 'Position is required';
  if (!company) errors.company = 'Company is required';
  if (!jobType) errors.jobType = 'Job type is required';

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  // 👉 Save to DB here
  console.log({ position, description, company, jobType, salary });

  return { success: true };
}
