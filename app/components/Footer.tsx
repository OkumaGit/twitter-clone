export default function Footer() {
  const COPYRIGHT_YEAR = 2026;
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex flex-col max-w-6xl justify-between px-4 py-3">
        <ul className="flex gap-3">
          <li>
            <a href="" />
            Link
          </li>
          <li>Link</li>
        </ul>
        <div className="">
          © {COPYRIGHT_YEAR} Microblog. Built for learning.
        </div>
      </div>
    </footer>
  );
}
