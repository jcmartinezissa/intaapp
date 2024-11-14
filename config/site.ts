export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "INTAApp : 2024",
  description: "Guia de procesos",
  navItems: [
    {
      label: "Consultas",
      href: "/Consultas",
    },
    {
      label: "Actividad",
      href: "/actividad",
    },
    {
      label: "Ayuda",
      href: "/ayuda",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
