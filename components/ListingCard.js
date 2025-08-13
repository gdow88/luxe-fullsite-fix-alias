
import { MapPin, BedDouble, Bath, CarFront, Ruler } from "lucide-react";
function formatPrice(n){ return n.toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}); }
function bedsDisplay(l){ const b=Number(l.beds|| (l.property && l.property.bedrooms)||0); return b>0?b:0;}
function bathsDisplay(l){ const b=Number(l.baths); if(!Number.isNaN(b)&&b>0) return b%1===0?b:Number(b.toFixed(1)); const full=Number(l.property&&l.property.bathsFull||0); const half=Number(l.property&&l.property.bathsHalf||0); const total=full+(half?0.5:0); return total||0;}
function sqftDisplay(l){ const s=Number(l.sqft||(l.property&&l.property.area)||(l.property&&l.property.livingArea)||0); return s>0?s.toLocaleString():"0";}
function carDisplay(l){ const c=Number(l.cars||l.garageSpaces||l.garageSpacesTotal||0); return c>0?c:0;}
export default function ListingCard({ l }){
  return (
    <div className="overflow-hidden rounded-2xl bg-[#111216] border border-white/10 shadow-lg">
      <div className="relative aspect-[4/3]">
        <img src={l.image} alt={l.address} className="absolute inset-0 h-full w-full object-cover"/>
        <div className="absolute left-3 top-3 flex gap-2">
          {(l.tags||[]).map((t) => (
            <span key={t} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs border border-white/20 bg-black/70 text-[#E8D7A9] backdrop-blur">{t}</span>
          ))}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-white">{formatPrice(l.price)}</p>
          <div className="flex items-center text-slate-300 text-sm"><MapPin className="h-4 w-4 mr-1"/>{l.address.split(",")[1]?.trim()}</div>
        </div>
        <p className="text-sm text-slate-400 mt-1">{l.address}</p>
        <div className="mt-4 grid grid-cols-4 gap-3 text-sm text-slate-300">
          <div className="flex items-center gap-1"><BedDouble className="h-4 w-4"/>{bedsDisplay(l)} bd</div>
          <div className="flex items-center gap-1"><Bath className="h-4 w-4"/>{bathsDisplay(l)} ba</div>
          <div className="flex items-center gap-1"><CarFront className="h-4 w-4"/>{carDisplay(l)} car</div>
          <div className="flex items-center gap-1"><Ruler className="h-4 w-4"/>{sqftDisplay(l)} sf</div>
        </div>
      </div>
    </div>
  );
}
