'use client';

import { useActionState, useEffect } from 'react';
import { createJob } from '@/actions/jobs';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function New() {
  const [state, formAction, isPending] = useActionState(createJob, null);
  useEffect(() => {
    if (state?.success) {
      toast('Job posted successfully!');
    }
  }, [state?.success]);

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
          <Input name='employer' />
          {state?.errors?.employer && (
            <p className='text-sm text-red-500'>{state.errors.employer}</p>
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
          <label className='text-sm font-medium'>Amount</label>
          <Input name='amount' />
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

      <hr />

      <div className='flex gap-5'>
        {/* Email Address */}
        <div className='space-y-2 flex-1'>
          <label className='text-sm font-medium'>Email Address</label>
          <Input name='email' />
          {state?.errors?.email && (
            <p className='text-sm text-red-500'>{state.errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className='space-y-2 flex-1'>
          <label className='text-sm font-medium'>Phone #</label>
          <Input name='phone' />
          {state?.errors?.phone && (
            <p className='text-sm text-red-500'>{state.errors.phone}</p>
          )}
        </div>
      </div>

      {/* Address */}

      <label className='text-sm font-medium'>Address</label>
      <Input name='address' />
      {state?.errors?.address && (
        <p className='text-sm text-red-500'>{state.errors.address}</p>
      )}

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
    </form>
  );
}
