import {
  Activity,
  ArrowUpRightFromCircle,
  FileText,
  GaugeCircle,
  Percent,
  Repeat2,
} from 'lucide-react';

const NAVITEMS2 = [
  {
    text: 'Dashboard',
    icon: GaugeCircle,
    href: '/',
    roles: ['admin'],
  },
  {
    text: 'Job Cards',
    icon: FileText,
    href: '/job-cards',
    roles: ['admin'],
  },
  {
    text: 'Assign Task',
    icon: ArrowUpRightFromCircle,
    href: '/assign-task',
    roles: ['admin'],
  },
  {
    text: 'Tasks',
    icon: Activity,
    href: '/tasks',
    roles: ['admin', 'user'],
  },
  {
    text: 'Ongoing Jobs',
    icon: Repeat2,
    href: '/ongoing-jobs',
    roles: ['admin'],
  },
  {
    text: 'Performance By Staff',
    icon: Percent,
    href: '/performances',
    roles: ['admin'],
  },
];

export function getMenuItems(role: string) {
  return NAVITEMS2.filter(item => item.roles.includes(role));
}
