export interface NavItem {
  headTitle: string;
  items: {
    title: string;
    href?: string;
    disabled?: boolean;
    icon?: any;
    label?: string;
    description?: string;
  }[]
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}