'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ChevronDown, MoreHorizontalIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import Link from 'next/link';

const data = [
  {
    id: 1,
    position: 'Frontend Developer',
    employer: 'Google',
    jobType: 'Full-Time',
    salary: '$12/hr',
    applications: 0,
    status: 'New',
  },

  {
    id: 2,
    position: 'Backend Developer',
    employer: 'Google',
    jobType: 'Full-Time',
    salary: '$12/hr',
    applications: 0,
    status: 'New',
  },
];

export default function Jobs() {
  const [openRow, setOpenRow] = useState<number | null>(null);

  const toggleRow = (id: number) => {
    setOpenRow(openRow === id ? null : id);
  };

  return (
    <div className='w-full'>
      <div className='my-5'>
        <Link href={'/dashboard/new'}>
          <Button className='cursor-pointer'>Add New</Button>
        </Link>
      </div>
      {/* Desktop Table */}
      <div className='hidden md:block'>
        <Table className='border'>
          <TableHeader>
            <TableRow>
              <TableHead className='font-bold'>Position</TableHead>
              <TableHead className='font-bold'>Employer</TableHead>
              <TableHead className='font-bold'>Job Type</TableHead>
              <TableHead className='font-bold'>Salary</TableHead>
              <TableHead className='font-bold'>Applications</TableHead>
              <TableHead className='font-bold'>Status</TableHead>
              <TableHead className='font-bold'>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.position}</TableCell>
                <TableCell>{item.employer}</TableCell>
                <TableCell>{item.jobType}</TableCell>
                <TableCell>{item.salary}</TableCell>
                <TableCell>{item.applications}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant='ghost' size='icon' className='size-8'>
                        <MoreHorizontalIcon />
                        <span className='sr-only'>Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem variant='destructive'>
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile View */}
      <div className='md:hidden space-y-2'>
        {data.map((item) => {
          const isOpen = openRow === item.id;

          return (
            <div key={item.id} className='border rounded-lg p-3'>
              {/* Title (Position) */}
              <button
                onClick={() => toggleRow(item.id)}
                className='flex w-full items-center justify-between font-semibold text-left'
              >
                {item.position}
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform',
                    isOpen && 'rotate-180',
                  )}
                />
              </button>

              {/* Expandable Details */}
              {isOpen && (
                <div className='mt-3 space-y-2 text-sm text-muted-foreground'>
                  <p>
                    <strong>Company:</strong> {item.company}
                  </p>
                  <p>
                    <strong>Job Type:</strong> {item.jobType}
                  </p>
                  <p>
                    <strong>Salary:</strong> {item.salary}
                  </p>
                  <p>
                    <strong>Applications:</strong> {item.applications}
                  </p>
                  <p>
                    <strong>Status:</strong> {item.status}
                  </p>

                  {/* Actions */}
                  <div className='pt-2'>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant='outline'
                          size='sm'
                          className='flex items-center gap-2'
                        >
                          <MoreHorizontalIcon className='h-4 w-4' />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align='end'>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant='destructive'>
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
