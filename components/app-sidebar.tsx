'use client';

import * as React from 'react';

import { NavMain } from '@/components/nav-main';

import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import {
  GalleryVerticalEndIcon,
  AudioLinesIcon,
  TerminalIcon,
  Settings2Icon,
  BriefcaseBusiness,
  FileSearch,
  Building2,
  UserSearch,
  CodeXml,
} from 'lucide-react';

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Job Board',
      logo: <CodeXml />,
      plan: '(Stenix.dev)',
    },
  ],
  navMain: [
    {
      title: 'Jobs',
      url: '#',
      icon: <BriefcaseBusiness />,
      isActive: true,
    },
    {
      title: 'Applications',
      url: '#',
      icon: <FileSearch />,
    },
    {
      title: 'Employers',
      url: '#',
      icon: <Building2 />,
    },
    {
      title: 'Candidates',
      url: '#',
      icon: <UserSearch />,
    },
    {
      title: 'Settings',
      url: '#',
      icon: <Settings2Icon />,
      hasToggle: true,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
