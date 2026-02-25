import { Plus } from 'lucide-react';
import type { MenuItem } from '../types';
import { motion } from 'framer-motion';
import { GlowCard } from './ui/spotlight-card';
import { RainbowBorderButton } from './ui/rainbow-borders-button';

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
                    className="h-40 relative backdrop-blur-md rounded-t-2xl border-b border-white/5 overflow-hidden"
                    style={{ backgroundColor: `${item.uiColor}20` }}
                >
                    {item.image ? (
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                        />
                    ) : (
                        <div className="flex w-full h-full items-center justify-center text-6xl">
                            <span className="group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl">{item.imagePlaceholder}</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80"></div>

                    <div className="absolute top-3 left-3 flex gap-2">
                        <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded-full tracking-wider shadow-sm backdrop-blur-md ${item.dietaryPreference === 'Veg' ? 'bg-[#80B918]/20 text-[#80B918] border border-[#80B918]/30' : 'bg-red-500/20 text-red-500 border border-red-500/30'
                            }`}>
                            {item.dietaryPreference}
                        </span>
                        <span className="px-2 py-1 text-[10px] font-bold uppercase rounded-full tracking-wider bg-black/60 text-neutral-300 backdrop-blur-md shadow-sm border border-white/10">
                            {item.availability}
                        </span>
                    </div>
                </div>

                <div className="p-5 flex flex-col flex-grow bg-transparent">
                    <div className="flex justify-between items-start mb-2 gap-4">
                        <h3 className="font-bold text-white leading-tight flex-1">{item.name}</h3>
                        <p className="font-bold text-[#80B918] whitespace-nowrap">₹{item.price}</p>
                    </div>

                    <p className="text-sm text-neutral-400 mb-6 flex-grow line-clamp-2">{item.description}</p>

                    <RainbowBorderButton
                        onClick={() => onAdd(item)}
                        disabled={item.availability === 'Sold Out'}
                        className="w-full py-3"
                    >
                        <Plus size={18} className="text-[#80B918]" />
                        <span className="text-white/90 group-hover:text-white transition-colors">{item.addOns.length > 0 ? 'Customize & Add' : 'Add to Cart'}</span>
                    </RainbowBorderButton>
                </div>
            </motion.div>
        </GlowCard>
    );
}
