export interface FooterSection {
  title: string;
  links: string[];
}

export const footerLinks: FooterSection[] = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Contact"]
  },
  {
    title: "Features",
    links: ["Employee Clock-In/Out", "HR Dashboard", "Payroll Integration", "Attendance Reports"]
  },
  {
    title: "Support",
    links: ["FAQs", "Help Center", "Privacy Policy", "Terms of Service"]
  }
];
