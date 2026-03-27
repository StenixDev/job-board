'use server';

import { z } from 'zod';

// 1. Define schema
const jobSchema = z.object({
  position: z.string().min(1, 'Position is required'),
  description: z.string().optional(),
  employer: z.string().min(1, 'employer is required'),
  jobType: z.string().min(1, 'Job type is required'),
  salary: z.string().optional(),
});

export async function createJob(prevState: any, formData: FormData) {
  // 2. Convert FormData → object
  const rawData = {
    position: formData.get('position'),
    description: formData.get('description'),
    employer: formData.get('employer'),
    jobType: formData.get('jobType'),
    salary: formData.get('salary'),
  };

  // 3. Validate using Zod
  const result = jobSchema.safeParse(rawData);

  if (!result.success) {
    // 4. Format errors (similar to your previous structure)
    const errors: Record<string, string> = {};

    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as string;
      errors[field] = issue.message;
    });

    return { errors };
  }

  const data = result.data;

  // 👉 Save to DB here
  console.log(data);

  return { success: true };
}
