import { ShoppingBag, LogOut, User as UserIcon, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { GlowCard } from './ui/spotlight-card';

interface HeaderProps {
    onCartClick: () => void;
    showBack?: boolean;
    onBackClick?: () => void;
}

export function Header({ onCartClick, showBack, onBackClick }: HeaderProps) {
    const { user, logout } = useAuth();
    const { totalItems } = useCart();

    return (
        <header className="sticky top-0 z-40 p-4">
            <GlowCard customSize glowColor="green" className="max-w-5xl mx-auto bg-neutral-900/80 border border-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-0">
                <div className="h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full relative z-10">
                    <div className="flex items-center gap-2 xl:gap-4">
                        {showBack && (
                            <button
                                onClick={onBackClick}
                                className="p-2 sm:mr-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-colors flex items-center justify-center"
                                title="Go Back"
                            >
                                <ArrowLeft size={20} />
                            </button>
                        )}
                        <div className="w-8 h-8 bg-[#80B918] rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-[#80B918]/20">
                            C
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight hidden sm:block">
                            Corporate Cafeteria
                        </span>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6 z-10">
                        <div className="hidden sm:flex items-center gap-2 text-sm text-neutral-300 bg-neutral-800/50 px-3 py-1.5 rounded-full border border-white/5">
                            <UserIcon size={16} />
                            <span className="font-medium text-white">{user?.name}</span>
                            <span className="text-neutral-500">|</span>
                            <span>{user?.department}</span>
                        </div>

                        <button
                            onClick={onCartClick}
                            className="relative p-2 text-neutral-400 hover:text-[#80B918] transition-colors rounded-full hover:bg-[#80B918]/10"
                        >
                            <ShoppingBag size={24} />
                            {totalItems > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                                    {totalItems}
                                </span>
                            )}
                        </button>

                        <button
                            onClick={logout}
                            className="flex items-center justify-center p-2 text-neutral-500 hover:text-red-500 hover:bg-red-500/10 rounded-full transition-colors"
                            title="Logout"
                        >
                            <LogOut size={20} />
                        </button>
                    </div>
                </div>
            </GlowCard>
        </header>
    );
}
