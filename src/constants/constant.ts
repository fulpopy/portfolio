import { NavItems } from "@/models/NavItem";
import { User } from "@/models/User";

export const user: User = {
  name: "Akash Deep Singh",
  title: "Full Stack Developer",
  location: "New Delhi, India",
  email: "",
  phone: "",
  avatar: "https://avatars.githubusercontent.com/u/52532889?v=4",
};

// export const navMenu = ["About", "Projects", "Resume", "Blog", "Contact"];

export const navItems: NavItems = {
  home: { label: "Home", path: "home" },
  about: { label: "About", path: "about" },
  projects: { label: "Projects", path: "projects" },
  resume: { label: "Resume", path: "resume" },
  blogs: { label: "Blogs", path: "blog" },
  contact: { label: "Contact", path: "contact" },
};
