
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import { Home, Calendar, Phone, Mail, MapPin, ArrowRight, Star } from "lucide-react";

const CONTACT_EMAIL = "gerard@luxetn.com";
const PHONE_DISPLAY = "978-380-2289";
const PHONE_LINK = "9783802289";

const listingsSeed = [
  {
    id: "135-nashboro-greens",
    address: "135 Nashboro Greens, Nashville, TN",
    price: 449900, beds: 3, baths: 2.5, cars: 2, sqft: 1820,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",    tags: ["Sample","Move-in Ready"]
  },
  {
    id: "east-nashville-bungalow",
    address: "914 Shelby Ave, Nashville, TN",
    price: 589000, beds: 3, baths: 2, cars: 1, sqft: 1640,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80",
    tags: ["Sample","Historic"]
  },
  {
    id: "franklin-townhome",
    address: "207 Harpeth Way, Franklin, TN",
    price: 679000, beds: 4, baths: 3, cars: 2, sqft: 2205,
    image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1600&q=80",
    tags: ["Sample","Great Schools"]
  },
];

export default function HomePage(){
  function handleContactSubmit(e){
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = (form.get("name")||"").toString();
    const email = (form.get("email")||"").toString();
    const phone = (form.get("phone")||"").toString();
    const message = (form.get("message")||"").toString();
    const subject = encodeURIComponent(`New inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-slate-100">
      <Header />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2400&auto=format&fit=crop" alt="Nashville skyline" className="h-full w-full object-cover"/>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-white">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-[#C9A24A]/30 bg-black/20 px-3 py-1 text-xs tracking-wide text-[#E8D7A9]">Nashville Real Estate</span>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-white">
              Buy & sell with confidence.<br/>Live where you love.
            </h1>
            <p className="mt-4 text-lg md:text-xl/relaxed text-slate-200/90 max-w-2xl">Smart strategy, clear communication, and negotiation that gets you to the closing table.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#mls" className="inline-flex items-center justify-center px-5 h-12 text-sm font-medium rounded-full bg-white text-black hover:bg-white/90 transition">
                <Home className="mr-2 h-4 w-4"/>Browse MLS
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-5 h-12 text-sm font-medium rounded-full bg-white/5 border border-white/20 text-white hover:bg-white/10 transition">
                <Calendar className="mr-2 h-4 w-4"/>Request a Consult
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="mls" className="border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-end justify-between mb-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight font-serif">Sample Listings</h2>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs border border-white/20 bg-white/10 text-white">Live MLS Search Coming Soon</span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listingsSeed.map((l) => (<ListingCard key={l.id} l={l} />))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-black/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-[#C9A24A]/30 bg-white/5 px-3 py-1 text-xs tracking-wide text-[#E8D7A9]">About</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight font-serif text-white">Local expertise. Clear communication.</h2>
            <p className="mt-4 text-slate-300">Gerard Dow · {PHONE_DISPLAY} · {CONTACT_EMAIL}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#111216] border border-white/10 p-5"><p className="text-sm text-slate-400">Average Days on Market</p><p className="text-2xl font-semibold text-white"><span className="tabular-nums">12</span></p></div>
              <div className="rounded-2xl bg-[#111216] border border-white/10 p-5"><p className="text-sm text-slate-400">Total Volume</p><p className="text-2xl font-semibold text-white">$25M+</p></div>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-white/10">
            <img src="/gerard-headshot.jpg" alt="Gerard Dow" className="h-full w-full object-cover"/>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-[#0B0B0C] border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight font-serif">Clients say it best</h2>
            <a href="#contact" className="text-sm group inline-flex items-center gap-1 text-slate-300 hover:text-white">Read more <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition"/></a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { quote: "Gerard handled everything and kept us calm. Multiple offers in 48 hours.", name: "M. Carter" },
              { quote: "Our first offer won without overpaying—straightforward and responsive.", name: "A. Nguyen" },
              { quote: "Prepped, staged, and sold above list. Couldn’t be easier.", name: "The Thompsons" },
            ].map((r) => (
              <div key={r.name} className="rounded-2xl bg-[#111216] border border-white/10 p-6">
                <div className="flex gap-1 mb-3 text-[#C9A24A]" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-current" />))}
                </div>
                <p className="text-slate-200">"{r.quote}"</p>
                <p className="mt-4 text-sm text-slate-400">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-black/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight font-serif">Let’s talk next steps</h2>
            <p className="mt-2 text-slate-300">Tell me a bit about your move. I’ll follow up to schedule a consult.</p>
            <form className="mt-6 grid gap-3" onSubmit={handleContactSubmit}>
              <input required placeholder="Name" name="name" className="w-full px-3 h-11 rounded-2xl bg-white/5 border border-white/15 outline-none text-white placeholder:text-slate-400"/>
              <input required type="email" placeholder="Email" name="email" className="w-full px-3 h-11 rounded-2xl bg-white/5 border border-white/15 outline-none text-white placeholder:text-slate-400"/>
              <input placeholder="Phone" name="phone" className="w-full px-3 h-11 rounded-2xl bg-white/5 border border-white/15 outline-none text-white placeholder:text-slate-400"/>
              <textarea placeholder="What are you looking to do? (timing, budget, neighborhoods)" name="message" className="w-full p-3 min-h-[140px] rounded-2xl bg-white/5 border border-white/15 outline-none text-white placeholder:text-slate-400"/>
              <button type="submit" className="inline-flex items-center justify-center px-5 h-11 text-sm font-medium rounded-full bg:white text-black hover:bg-white/90 transition">Send message</button>
            </form>
            <p className="mt-2 text-xs text-slate-400">This form opens your email client and pre-fills the message to {CONTACT_EMAIL}. We can switch to a server handler or Formspree later.</p>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-2xl h-full bg-[#111216] border border-white/10 p-6">
              <h3 className="text-lg font-semibold tracking-tight font-serif text-white">Contact</h3>
              <div className="mt-4 space-y-2 text-sm text-slate-300">
                <p className="flex items-center gap-2"><Phone className="h-4 w-4"/> <a href={`tel:${PHONE_LINK}`} className="hover:underline">{PHONE_DISPLAY}</a></p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4"/> <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline">{CONTACT_EMAIL}</a></p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Middle Tennessee</p>
              </div>
              <p className="text-xs text-slate-500 mt-6">Brokerage: The Luxe Collective — Agent: Gerard Dow ({PHONE_DISPLAY})</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
