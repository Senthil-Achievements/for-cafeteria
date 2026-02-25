import { useState } from 'react';
import { Header } from '../components/Header';
import { MenuItemCard } from '../components/MenuItemCard';
import { AddOnsModal } from '../components/AddOnsModal';
import { CartDrawer } from '../components/CartDrawer';
import { todayMenu, categories } from '../data/mockData';
import type { MenuItem, AddOn } from '../types';
import { useCart } from '../context/CartContext';
import { ParallaxScrollSecond } from '../components/ui/parallax-scroll';

import { GlowCard } from '../components/ui/spotlight-card';

const galleryImages = [
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=800&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80",
    "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?w=800&q=80",
    "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=800&q=80",
    "https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=800&q=80",
    "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80",
    "https://images.unsplash.com/photo-1626779836913-94c6f376a4df?w=800&q=80",
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
];

export default function Dashboard() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
    const { addItem } = useCart();

    const handleAddClick = (item: MenuItem) => {
        if (item.addOns.length > 0) {
            setSelectedItem(item);
        } else {
            addItem({ menuItem: item, selectedAddOns: [], quantity: 1 });
            setIsCartOpen(true);
        }
    };

    const handleModalConfirm = (item: MenuItem, selectedAddOns: AddOn[]) => {
        addItem({ menuItem: item, selectedAddOns, quantity: 1 });
        setIsCartOpen(true);
    };

    return (
        <div className="min-h-screen">
            <Header onCartClick={() => setIsCartOpen(true)} />

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
                <section>
                    <div className="mb-8">
                        <h1 className="text-3xl font-extrabold text-white tracking-tight">Today's Specials</h1>
                        <p className="text-neutral-400 mt-2">Discover our fresh, dynamic menu prepared for you today.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {todayMenu.map((item) => (
                            <MenuItemCard key={item.id} item={item} onAdd={handleAddClick} />
                        ))}
                    </div>
                </section>

                <GlowCard customSize glowColor="purple" className="bg-neutral-900/60 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-sm relative overflow-hidden">
                    <h2 className="text-xl font-bold text-white mb-6 relative z-10">Categories Available</h2>
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide relative z-10">
                        {categories.map((category) => (
                            <div key={category.id} className="flex-none bg-neutral-800/50 hover:bg-neutral-800 border border-white/10 hover:border-white/20 transition-all px-5 py-4 rounded-xl flex items-center gap-3 cursor-pointer group min-w-[160px]">
                                <span className="text-2xl group-hover:scale-110 transition-transform">{category.icon}</span>
                                <span className="font-semibold text-neutral-300 group-hover:text-white">{category.name}</span>
                            </div>
                        ))}
                    </div>
                </GlowCard>

                <section className="pt-8">
                    <div className="mb-4">
                        <h2 className="text-3xl font-extrabold text-white tracking-tight">Culinary Inspiration</h2>
                        <p className="text-neutral-400 mt-2">A glimpse into our vibrant kitchens and dining spaces.</p>
                    </div>
                    <ParallaxScrollSecond images={galleryImages} />
                </section>
            </main>

            <AddOnsModal
                isOpen={!!selectedItem}
                item={selectedItem}
                onClose={() => setSelectedItem(null)}
                onConfirm={handleModalConfirm}
            />

            <CartDrawer
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />
        </div>
    );
}
