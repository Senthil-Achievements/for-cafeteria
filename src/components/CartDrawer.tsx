import { X, Trash2, ArrowRight, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GlowCard } from './ui/spotlight-card';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: Props) {
    const { items, removeItem, updateQuantity, totalPrice } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        onClose();
        navigate('/checkout');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="relative w-full max-w-md h-full z-10 p-2 sm:p-4"
                    >
                        <GlowCard customSize glowColor="red" className="w-full h-full bg-neutral-900/90 border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-0">
                            <div className="flex flex-col h-full w-full relative z-10">
                                <div className="flex items-center justify-between p-6 border-b border-white/10 bg-neutral-900/50">
                                    <h2 className="text-xl font-bold text-white">Your Order</h2>
                                    <button
                                        onClick={onClose}
                                        className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="flex-1 overflow-y-auto p-6 bg-transparent">
                                    {items.length === 0 ? (
                                        <div className="h-full flex flex-col items-center justify-center text-neutral-500 space-y-4">
                                            <div className="w-24 h-24 bg-neutral-800/50 rounded-full flex items-center justify-center text-4xl border border-white/5">
                                                🍽️
                                            </div>
                                            <p className="text-neutral-400 font-medium tracking-wide">Your cart is empty</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            {items.map((item) => (
                                                <motion.div
                                                    layout
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, scale: 0.95 }}
                                                    key={item.id}
                                                    className="bg-neutral-800/50 p-4 rounded-xl border border-white/10 shadow-sm"
                                                >
                                                    <div className="flex justify-between items-start gap-3">
                                                        <div className="flex-1">
                                                            <h4 className="font-bold text-white leading-tight">{item.menuItem.name}</h4>
                                                            <div className="text-sm text-neutral-400 mt-1.5 space-y-1">
                                                                {item.selectedAddOns.map(addon => (
                                                                    <div key={addon.id} className="flex justify-between items-center text-xs">
                                                                        <span>+ {addon.name}</span>
                                                                        <span>₹{addon.price}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <p className="font-bold text-[#80B918]">
                                                            ₹{(item.menuItem.price + item.selectedAddOns.reduce((s, a) => s + a.price, 0)) * item.quantity}
                                                        </p>
                                                    </div>

                                                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                                                        <div className="flex items-center gap-3 bg-neutral-900/50 rounded-lg p-1 border border-white/10">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="w-7 h-7 flex items-center justify-center bg-neutral-800 rounded shadow-sm text-neutral-300 hover:text-red-500 hover:bg-neutral-700 transition-colors"
                                                            >
                                                                <Minus size={14} />
                                                            </button>
                                                            <span className="font-medium text-sm w-4 text-center text-white">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="w-7 h-7 flex items-center justify-center bg-neutral-800 rounded shadow-sm text-neutral-300 hover:text-[#80B918] hover:bg-neutral-700 transition-colors"
                                                            >
                                                                <Plus size={14} />
                                                            </button>
                                                        </div>
                                                        <button
                                                            onClick={() => removeItem(item.id)}
                                                            className="p-2 text-neutral-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 bg-neutral-900/50 border-t border-white/10 shadow-xl z-20">
                                    <div className="flex justify-between items-end mb-6">
                                        <div>
                                            <p className="text-sm font-medium text-neutral-400 mb-1">Subtotal</p>
                                            <p className="text-3xl font-bold text-white tracking-tight">₹{totalPrice}</p>
                                        </div>
                                        {totalPrice > 0 && <span className="text-xs font-semibold text-[#80B918] bg-[#80B918]/10 border border-[#80B918]/20 px-2 py-1 rounded-full uppercase tracking-wide">Taxes Included</span>}
                                    </div>

                                    <button
                                        onClick={handleCheckout}
                                        disabled={items.length === 0}
                                        className="w-full bg-[#80B918] hover:bg-[#6FA614] disabled:bg-neutral-800 disabled:text-neutral-600 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#80B918]/20 disabled:shadow-none group"
                                    >
                                        <span>Proceed to Checkout</span>
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
