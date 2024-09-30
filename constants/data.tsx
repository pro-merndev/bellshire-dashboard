import CalendarTickIcon from '@/components/svg-icons/calendar-tick-icon';
import DocumentIcon from '@/components/svg-icons/document-icon';
import EmptyWalletIcon from '@/components/svg-icons/empty-wallet-icon';
import HomeIcon from '@/components/svg-icons/home-icon';
import LogoutIcon from '@/components/svg-icons/logout-icon';
import MessageText from '@/components/svg-icons/message-text-icon';
import SettingIcon from '@/components/svg-icons/setting-icon';
import SmartCarIcon from '@/components/svg-icons/smart-car-icon';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types';
import { usePathname } from 'next/navigation';

export const navItems = (): NavItem[] => {
  const pathName = usePathname();

  return [
    {
      headTitle: 'Dashboard',
      items: [
        {
          title: 'Home',
          href: '/dashboard',
          icon: <HomeIcon />,
          label: 'Dashboard'
        },
        {
          title: 'Wallet',
          href: '/dashboard/wallet',
          icon: <EmptyWalletIcon />,
          label: 'wallet'
        },
        {
          title: 'Consultation',
          href: '/dashboard/consultation',
          icon: <CalendarTickIcon />,
          label: 'wallet',
          endIcon: '/calendar-tick.svg'
        },
        {
          title: 'Chat',
          href: '/dashboard/chat',
          icon: <MessageText />,
          label: 'chat'
        }
      ]
    },
    {
      headTitle: 'Cours',
      items: [
        {
          title: 'PDF',
          href: '/dashboard/pdf',
          icon: <DocumentIcon />,
          label: 'pdf'
        }
      ]
    },
    {
      headTitle: 'Espace membre',
      items: [
        {
          title: 'Conciergerie',
          href: '/dashboard/conciergerie',
          icon: <SmartCarIcon />,
          label: 'conciergerie'
        }
      ]
    },
    {
      headTitle: 'Settings',
      items: [
        {
          title: 'Setting',
          href: '/dashboard/setting',
          icon: <SettingIcon />,
          label: 'setting'
        },
        {
          title: 'Logout',
          href: '/',
          icon: <LogoutIcon />,
          label: 'logout'
        }
      ]
    }
  ];
};
