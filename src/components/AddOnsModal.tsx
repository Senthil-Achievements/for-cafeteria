import { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import type { MenuItem, AddOn } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { GlowCard } from './ui/spotlight-card';

interface Props {
    isOpen: boolean;
    item: MenuItem | null;
    onClose: () => void;
    onConfirm: (item: MenuItem, selectedAddOns: AddOn[]) => void;
}

export function AddOnsModal({ isOpen, item, onClose, onConfirm }: Props) {
    const [selected, setSelected] = useState<AddOn[]>([]);

    useEffect(() => {
        if (isOpen) setSelected([]);
    }, [isOpen]);

    if (!isOpen || !item) return null;

    const handleToggle = (addon: AddOn) => {
        setSelected(prev =>
            prev.find(a => a.id === addon.id)
                ? prev.filter(a => a.id !== addon.id)
                : [...prev, addon]
        );
    };

    const handleConfirm = () => {
        onConfirm(item, selected);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-md z-10 p-2"
                    >
                        <GlowCard customSize glowColor="purple" className="bg-neutral-900/90 border border-white/10 rounded-2xl shadow-2xl w-full overflow-hidden p-0">
                            <div className="flex flex-col relative z-10 w-full h-full">
                                <div className="p-6 border-b border-white/10 flex justify-between items-center bg-neutral-900/50">
                                    <div>
                                        <h3 className="font-bold text-xl text-white">Customize Item</h3>
                                        <p className="text-sm text-neutral-400 mt-1">{item.name}</p>
                                    </div>
                                    <button onClick={onClose} className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors">
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="p-6 bg-transparent">
                                    <h4 className="font-medium text-white mb-4">Select Add-ons & Extras</h4>
                                    {item.addOns.length === 0 ? (
                                        <p className="text-sm text-neutral-500 italic">No extras available for this item.</p>
                                    ) : (
                                        <div className="space-y-3">
                                            {item.addOns.map(addon => {
                                                const isSelected = selected.some(a => a.id === addon.id);
                                                return (
                                                    <label
                                                        key={addon.id}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleToggle(addon);
                                                        }}
                                                        className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${isSelected ? 'border-[#80B918] bg-[#80B918]/10' : 'border-white/10 hover:border-white/20 bg-neutral-800/50'
                                                            }`}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isSelected ? 'bg-[#80B918] border-[#80B918] text-white' : 'border-neutral-600 bg-neutral-900'
                                                                }`}>
                                                                {isSelected && <Check size={14} strokeWidth={3} />}
                                                            </div>
                                                            <span className="font-medium text-white">{addon.name}</span>
                                                        </div>
                                                        <span className="text-[#80B918] font-medium">+₹{addon.price}</span>
                                                    </label>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 border-t border-white/10 bg-neutral-900/50 flex items-center justify-between z-20">
                                    <div>
                                        <p className="text-sm text-neutral-400">Total Price</p>
                                        <p className="text-2xl font-bold text-white">
                                            ₹{item.price + selected.reduce((s, a) => s + a.price, 0)}
                                        </p>
                                    </div>
                                    <button
                                        onClick={handleConfirm}
                                        className="bg-[#80B918] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#6FA614] shadow-lg shadow-[#80B918]/20 transition-colors"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </GlowCard>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
