import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Header } from '../components/Header';
import { CreditCard, Smartphone, CheckCircle, Wallet } from 'lucide-react';
import { GlowCard } from '../components/ui/spotlight-card';

export default function Checkout() {
    const { items, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();

    const [upiId, setUpiId] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handlePayment = (method: 'gpay' | 'phonepe' | 'upi') => {
        setError('');
        if (method === 'upi') {
            // Basic input sanitization/validation for UPI: typical format username@bank
            const upiRegex = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/;
            if (!upiRegex.test(upiId)) {
                setError('Please enter a valid UPI ID (e.g., yourname@bank).');
                return;
            }
        }

        // Simulate payment processing
        setTimeout(() => {
            setSuccess(true);
            clearCart();
        }, 1500);
    };

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 z-10 relative">
                <GlowCard customSize glowColor="green" className="bg-neutral-900/60 p-8 md:p-12 rounded-2xl border border-white/10 max-w-md w-full text-center shadow-lg">
                    <div className="w-20 h-20 bg-[#80B918]/20 border border-[#80B918]/30 text-[#80B918] rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Order Confirmed!</h2>
                    <p className="text-neutral-400 mb-8">Your food is being prepared. Show your employee ID at the counter to collect.</p>
                    <button
                        onClick={() => navigate('/')}
                        className="w-full bg-[#80B918] text-white py-3 rounded-xl font-bold hover:bg-[#6FA614] shadow-lg shadow-[#80B918]/20 transition-colors"
                    >
                        Back to Dashboard
                    </button>
                </GlowCard>
            </div>
        );
    }

    return (
        <div className="min-h-screen z-10 relative">
            <Header onCartClick={() => navigate('/')} showBack={true} onBackClick={() => navigate(-1)} />

            <main className="max-w-3xl mx-auto px-4 py-8 relative">
                <h1 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <CreditCard className="text-[#80B918]" />
                    Secure Checkout
                </h1>

                <GlowCard customSize glowColor="red" className="bg-neutral-900/60 rounded-2xl border border-white/10 overflow-hidden h-full p-0">
                    <div className="p-6 border-b border-white/10 bg-neutral-900/50">
                        <h2 className="font-semibold text-neutral-300">Order Summary</h2>
                        <div className="mt-4 space-y-3">
                            {items.map(item => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span className="text-neutral-400">{item.quantity}x {item.menuItem.name}</span>
                                    <span className="font-medium text-white">
                                        ₹{(item.menuItem.price + item.selectedAddOns.reduce((s, a) => s + a.price, 0)) * item.quantity}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-lg font-bold">
                            <span className="text-white">Total Amount</span>
                            <span className="text-[#80B918]">₹{totalPrice}</span>
                        </div>
                    </div>

                    <div className="p-6 md:p-8 space-y-8">
                        <div>
                            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">Express Payment</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => handlePayment('gpay')}
                                    className="flex items-center justify-center gap-2 py-4 px-4 border border-white/10 rounded-xl hover:border-white/20 hover:bg-neutral-800 transition-colors group"
                                >
                                    <Wallet className="text-[#1A73E8]" />
                                    <span className="font-semibold text-white">GPay</span>
                                </button>
                                <button
                                    onClick={() => handlePayment('phonepe')}
                                    className="flex items-center justify-center gap-2 py-4 px-4 border border-white/10 rounded-xl hover:border-white/20 hover:bg-neutral-800 transition-colors group"
                                >
                                    <Smartphone className="text-[#5f259f]" />
                                    <span className="font-semibold text-white">PhonePe</span>
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-transparent text-neutral-500">Or pay via UPI ID</span>
                            </div>
                        </div>

                        <div>
                            {error && (
                                <div className="mb-4 p-3 bg-red-500/10 text-red-500 rounded-xl border border-red-500/20 text-sm">
                                    {error}
                                </div>
                            )}
                            <label className="block text-sm font-medium text-neutral-300 mb-2">
                                Enter UPI ID
                            </label>
                            <div className="flex gap-3 flex-col sm:flex-row">
                                <div className="relative flex-1">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
                                        <Smartphone size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        value={upiId}
                                        onChange={(e) => setUpiId(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-neutral-950/50 border border-neutral-800 text-white rounded-xl focus:ring-2 focus:ring-[#80B918] focus:border-transparent outline-none transition-all placeholder:text-neutral-600"
                                        placeholder="employee@bank"
                                    />
                                </div>
                                <button
                                    onClick={() => handlePayment('upi')}
                                    className="bg-[#80B918] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#6FA614] shadow-lg shadow-[#80B918]/20 transition-all whitespace-nowrap"
                                >
                                    Verify & Pay
                                </button>
                            </div>
                        </div>
                    </div>
                </GlowCard>
            </main>
        </div>
    );
}
