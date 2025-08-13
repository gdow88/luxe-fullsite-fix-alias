
export default function Header(){
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#0B0B0C]/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/luxe-logo.png" alt="The Luxe Collective" className="h-10 w-10 rounded-full bg-white p-1 ring-1 ring-white/20"/>
          <div className="leading-tight">
            <p className="font-semibold tracking-tight">The Luxe Collective</p>
            <p className="text-xs text-slate-400">Nashville • Franklin • Middle TN</p>
          </div>
        </div>
      </div>
    </header>
  );
}
