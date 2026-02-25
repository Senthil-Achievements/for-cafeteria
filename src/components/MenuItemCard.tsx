import { Plus } from 'lucide-react';
import type { MenuItem } from '../types';
import { motion } from 'framer-motion';
import { GlowCard } from './ui/spotlight-card';

interface Props {
    item: MenuItem;
    onAdd: (item: MenuItem) => void;
}

export function MenuItemCard({ item, onAdd }: Props) {
    return (
        <GlowCard customSize glowColor="green" className="bg-neutral-900/60 rounded-2xl border border-white/10 overflow-hidden hover:shadow-lg transition-shadow group h-full p-0 gap-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col h-full rounded-2xl"
            >
                <div
                    className="h-32 flex items-center justify-center text-6xl relative backdrop-blur-md rounded-t-2xl border-b border-white/5"
                    style={{ backgroundColor: `${item.uiColor}20` }}
                >
                    <span className="group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl">{item.imagePlaceholder}</span>

                    <div className="absolute top-3 left-3 flex gap-2">
                        <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded-full tracking-wider ${item.dietaryPreference === 'Veg' ? 'bg-[#80B918]/20 text-[#80B918] border border-[#80B918]/30' : 'bg-red-500/20 text-red-500 border border-red-500/30'
                            }`}>
                            {item.dietaryPreference}
                        </span>
                        <span className="px-2 py-1 text-[10px] font-bold uppercase rounded-full tracking-wider bg-neutral-900/80 text-neutral-300 backdrop-blur-sm shadow-sm border border-white/10">
                            {item.availability}
                        </span>
                    </div>
                </div>

                <div className="p-5 flex flex-col flex-grow bg-transparent">
                    <div className="flex justify-between items-start mb-2 gap-4">
                        <h3 className="font-bold text-white leading-tight flex-1">{item.name}</h3>
                        <p className="font-bold text-[#80B918] whitespace-nowrap">₹{item.price}</p>
                    </div>

                    <p className="text-sm text-neutral-400 mb-4 flex-grow line-clamp-2">{item.description}</p>

                    <button
                        onClick={() => onAdd(item)}
                        disabled={item.availability === 'Sold Out'}
                        className="w-full py-2.5 px-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all 
            bg-neutral-800/80 text-white hover:bg-neutral-700 border border-white/10
            disabled:opacity-50 disabled:cursor-not-allowed group-hover:border-[#80B918] group-hover:text-[#80B918]"
                    >
                        <span className="relative z-10 flex items-center gap-2 cursor-pointer">
                            <Plus size={18} />
                            <span>{item.addOns.length > 0 ? 'Customize & Add' : 'Add to Cart'}</span>
                        </span>
                    </button>
                </div>
            </motion.div>
        </GlowCard>
    );
}
