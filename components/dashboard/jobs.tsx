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
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const data = [
  {
    id: 1,
    position: 'Frontend Developer',
    company: 'Google',
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
      {/* Desktop Table */}
      <div className='hidden md:block'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='font-bold'>Position</TableHead>
              <TableHead className='font-bold'>Company</TableHead>
              <TableHead className='font-bold'>Job Type</TableHead>
              <TableHead className='font-bold'>Salary</TableHead>
              <TableHead className='font-bold'>Applications</TableHead>
              <TableHead className='font-bold'>Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.position}</TableCell>
                <TableCell>{item.company}</TableCell>
                <TableCell>{item.jobType}</TableCell>
                <TableCell>{item.salary}</TableCell>
                <TableCell>{item.applications}</TableCell>
                <TableCell>{item.status}</TableCell>
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
              {/* Title (Clickable) */}
              <button
                onClick={() => toggleRow(item.id)}
                className='flex w-full items-center justify-between font-medium'
              >
                {item.title}
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform',
                    isOpen && 'rotate-180',
                  )}
                />
              </button>

              {/* Expandable Content */}
              {isOpen && (
                <div className='mt-3 space-y-1 text-sm text-muted-foreground'>
                  <p>
                    <strong>Company:</strong> {item.company}
                  </p>
                  <p>
                    <strong>Location:</strong> {item.location}
                  </p>
                  <p>
                    <strong>Salary:</strong> {item.salary}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
