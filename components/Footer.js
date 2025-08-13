
export default function Footer(){
  return (
    <footer className="py-12 border-t border-white/10 bg-[#0B0B0C]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-xs leading-relaxed text-slate-400">
          <p>Listing information provided by participating brokers and sourced from Realtracs MLS. Information is deemed reliable but not guaranteed and should be independently verified. © Realtracs. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} The Luxe Collective. All rights reserved.</p>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <a href="#">Privacy</a><span>•</span><a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
