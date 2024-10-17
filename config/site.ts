export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "twks.net | Server Infrastructure",
  description: "Server Infrastructure for twks.net",
  navItems: [
    {
      label: "Home",
      href: "/",
    }
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/tobikli",
    portfolio: "https://lydr.io",
  },
};
