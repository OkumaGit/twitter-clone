export default function SideBar() {
  const links = [
    { label: "Main", href: "/" },
    { label: "Profile", href: "/profile" },
  ];
  return (
    <aside className="hidden md:block">
      <nav className="space-y-2" aria-label="Main nav">
        {links.map((link) => {
          const active = link.href;
          return (
            <button
              key={link.href}
              onClick={() => link.href}
              className={`block w-full rounded-xl px-4 py-3 text-left text-sm transition ${
                active
                  ? "bg-blue-600 font-semibold text-white shadow-sm"
                  : "font-medium text-zinc-600 hover:bg-white hover:text-zinc-900 hover:shadow-sm"
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </nav>
    </aside>
    // <div className="flex flex-col items-center justify-center flex-1">
    //   <ul>
    //     <li>Main</li>
    //     <li>Profile</li>
    //     <li>Logout</li>
    //   </ul>
    // </div>
  );
}
