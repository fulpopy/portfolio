interface NavItem {
  label: string;
  path: string;
}

export interface NavItems {
  home: NavItem;
  about: NavItem;
  projects: NavItem;
  resume: NavItem;
  blogs: NavItem;
  contact: NavItem;
}
