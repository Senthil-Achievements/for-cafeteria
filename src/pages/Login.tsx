import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock } from 'lucide-react';
import { DemoBackgroundPaths } from '../components/demo';
import { GlowCard } from '../components/ui/spotlight-card';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Strict client-side validation for XSS/injection prevention
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid corporate email address.');
            return;
        }
        if (password.length < 8) {
            setError('Password must be at least 8 characters long.');
            return;
        }

        const success = await login(email, password);
        if (success) {
            navigate('/', { replace: true });
        } else {
            setError('Invalid email or password. Use your @company.com email.');
        }
    };

    return (
        <div className="dark bg-black relative min-h-screen flex items-center justify-center px-4">
            <div className="absolute inset-0 z-0">
                {/* Passing an empty title removes the text wrapper entirely */}
                <DemoBackgroundPaths />
            </div>

            <GlowCard
                customSize
                glowColor="green"
                className="relative z-10 max-w-md w-full bg-neutral-900/60"
            >
                <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 bg-[#80B918] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#80B918]/20">
                        <Lock size={24} />
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-center text-white mb-8 tracking-tight">
                    Cafeteria
                </h2>

                {error && (
                    <div className="mb-6 p-4 bg-red-500/10 text-red-500 rounded-xl text-sm border border-red-500/20 text-center font-medium">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                            Corporate Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-neutral-950/50 border border-neutral-800 text-white rounded-xl focus:ring-2 focus:ring-[#80B918] focus:border-transparent outline-none transition-all placeholder:text-neutral-600"
                            placeholder="employee@company.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="off"
                            className="w-full px-4 py-3 bg-neutral-950/50 border border-neutral-800 text-white rounded-xl focus:ring-2 focus:ring-[#80B918] focus:border-transparent outline-none transition-all placeholder:text-neutral-600"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#80B918] hover:bg-[#6FA614] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-[#80B918]/20 mt-2"
                    >
                        Secure Login
                    </button>
                </form>
            </GlowCard>
        </div>
    );
}
