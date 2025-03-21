export interface Testimonial {
  title: string;
  about: string;
  comment: string;
}

export const testimonials: Testimonial[] = [
  {
    title: "Managing attendance has never been easier!",
    about: "Victoria U, HR Manager at TechCorp",
    comment:
      "This clocking system has completely transformed how we track employee work hours. The real-time dashboard and automated reports save us so much time. Payroll processing is now error-free!",
  },
  {
    title: "Clocking in is now effortless!",
    about: "OluwaseunFunmi, Software Engineer",
    comment:
      "I love how simple and fast it is to clock in and out. No more paper timesheets or manual logins. Plus, I can track my work hours easily from my dashboard!",
  },
  {
    title: "A game-changer for remote work!",
    about: "Jessica T., Marketing Specialist",
    comment:"As a remote worker, this system helps me stay accountable and on track. The mobile-friendly interface lets me clock in from anywhere, and my HR team can see my work hours in real time.",
  },
];
