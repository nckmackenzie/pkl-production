import {
  Activity,
  ArrowUpRightFromCircle,
  FileText,
  GaugeCircle,
  Percent,
  Repeat2,
} from 'lucide-react';

export const NAVITEMS = [
  {
    admin: [
      {
        text: 'Dashboard',
        icon: GaugeCircle,
        href: '/',
      },
      {
        text: 'Job Cards',
        icon: FileText,
        href: '/job-cards',
      },
      {
        text: 'Assign Task',
        icon: ArrowUpRightFromCircle,
        href: '/assign-task',
      },
      {
        text: 'Tasks',
        icon: Activity,
        href: '/tasks',
      },
      {
        text: 'Ongoing Jobs',
        icon: Repeat2,
        href: '/ongoing-jobs',
      },
      {
        text: 'Performance By Staff',
        icon: Percent,
        href: '/performances',
      },
    ],
  },
];
