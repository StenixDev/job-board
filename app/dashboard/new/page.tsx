'use client';

import { useActionState } from 'react';
import { createJob } from '@/actions/jobs';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function New() {
  const [state, formAction, isPending] = useActionState(createJob, null);

  return (
    <form
      action={formAction}
      className='max-w-2xl space-y-6   border p-10 bg-sidebar'
    >
      <div className='flex gap-5'>
        {/* Position */}
        <div className='space-y-2 flex-1'>
          <label className='text-sm font-medium'>Job</label>
          <Input name='position' />
          {state?.errors?.position && (
            <p className='text-sm text-red-500'>{state.errors.position}</p>
          )}
        </div>

        {/* Company */}
        <div className='space-y-2 flex-1'>
          <label className='text-sm font-medium'>Employer</label>
          <Input name='company' />
          {state?.errors?.company && (
            <p className='text-sm text-red-500'>{state.errors.company}</p>
          )}
        </div>
      </div>

      {/* Description */}
      <div className='space-y-2'>
        <label className='text-sm font-medium'>Description</label>
        <Textarea name='description' className='min-h-30' />
      </div>
      <div className='flex gap-5'>
        {/* Salary */}
        <div className='space-y-2 flex-1'>
          <label className='text-sm font-medium'>Salary</label>
          <Input name='salary' />
        </div>

        {/* Job Type (✅ Native select — recommended) */}
        <div className='space-y-2 flex-1'>
          <label className='text-sm font-medium'>Job Type</label>
          <select
            name='jobType'
            className='w-full rounded-md border px-3 py-2 text-sm'
          >
            <option value=''>Select job type</option>
            <option value='Full-Time'>Full-Time</option>
            <option value='Part-Time'>Part-Time</option>
            <option value='Dayjobs'>Dayjobs</option>
          </select>
          {state?.errors?.jobType && (
            <p className='text-sm text-red-500'>{state.errors.jobType}</p>
          )}
        </div>
      </div>

      {/* Submit */}
      <div className='w-30'>
        <Button
          type='submit'
          disabled={isPending}
          className='w-full cursor-pointer'
        >
          {isPending ? 'Posting...' : 'Post Job'}
        </Button>
      </div>

      {/* Success */}
      {state?.success && (
        <p className='text-green-600 text-sm'>Job posted successfully!</p>
      )}
    </form>
  );
}
