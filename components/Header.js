export default function Header(){
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#0B0B0C]/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: brand */}
        <div className="flex items-center gap-3">
          <img src="/luxe-logo.png" alt="The Luxe Collective" className="h-10 w-10 rounded-full bg-white p-1 ring-1 ring-white/20"/>
          <div className="leading-tight">
            <p className="font-semibold tracking-tight">The Luxe Collective</p>
            <p className="text-xs text-slate-400">Nashville • Franklin • Middle TN</p>
          </div>
        </div>

        {/* Right: simple nav */}
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
          <a href="/#mls" className="hover:text-white">Listings</a>
          <a href="/search" className="hover:text-white">Search</a>
          <a href="/#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}
