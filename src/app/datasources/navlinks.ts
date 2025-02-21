interface NavLinkModel {
  title: string;
  href: string;
}

export const navLinks: NavLinkModel[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Contact center",
    href: "/dashboard/contact-center",
  },
  {
    title: "Customers",
    href: "/dashboard/customers",
  },
];
