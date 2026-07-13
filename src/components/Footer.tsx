const links = [
  { href: "https://www.linkedin.com/in/luke-o-dair-b0679960/", label: "LinkedIn" },
  { href: "https://github.com/dev-sierra", label: "GitHub" },
  { href: "mailto:lukeodair398@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:text-zinc-500">
        <span>&copy; {new Date().getFullYear()} Luke O&apos;Dair</span>
        <div className="flex gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-black dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
