import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SearchPage(){
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-slate-100">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Search Middle Tennessee Homes
        </h1>
        <p className="mt-2 text-slate-300">Live MLS search powered by Realtracs via MLS Grid.</p>

        {/* Replace with your IDX vendor embed later */}
        <div className="mt-6 rounded-2xl bg-[#111216] border border-white/10 p-4">
          <div className="aspect-[16/10] w-full grid place-items-center text-slate-400">
            <div>
              <p className="text-center">Your IDX widget will appear here.</p>
              <p className="text-center text-xs mt-2">Paste vendor script/iframe into pages/search.js</p>
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Listing information provided by participating brokers and sourced from Realtracs MLS. Information is deemed reliable but not guaranteed and should be independently verified. © Realtracs. All rights reserved.
        </p>
      </main>
      <Footer />
    </div>
  );
}
