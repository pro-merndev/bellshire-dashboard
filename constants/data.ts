import { NavItem } from '@/types';

export const navItems: NavItem[] = [
  {
    title: 'Home',
    href: '/dashboard',
    icon: '/home-icon.svg',
    label: 'Dashboard'
  },
  {
    title: 'Wallet',
    href: '/dashboard/wallet',
    icon: '/empty-wallet.svg',
    label: 'wallet'
  },
  {
    title: 'Consultation',
    href: '/dashboard/consultation',
    icon: '/calendar-tick.svg',
    label: 'wallet'
  },
  {
    title: 'Chat',
    href: '/dashboard/chat',
    icon: '/message-text.svg',
    label: 'chat'
  },
  {
    title: 'PDF',
    href: '/dashboard/pdf',
    icon: '/document-text.svg',
    label: 'pdf'
  },
  {
    title: 'Conciergerie',
    href: '/dashboard/conciergerie',
    icon: '/smart-car.svg',
    label: 'conciergerie'
  },
  {
    title: 'Setting',
    href: '/dashboard/setting',
    icon: '/setting.svg',
    label: 'setting'
  },
  {
    title: 'Logout',
    href: '/',
    icon: '/logout.svg',
    label: 'logout'
  },
];
