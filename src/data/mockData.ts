import type { Category, MenuItem, User } from '../types';

export const mockUser: User = {
    employeeId: 'EMP-8472',
    name: 'Senthil',
    department: 'Procurement Operations',
};

export const categories: Category[] = [
    { id: 'c1', name: 'Main Course', icon: '🍲' },
    { id: 'c2', name: 'Snacks', icon: '🍟' },
    { id: 'c3', name: 'Beverages', icon: '☕' },
];

export const todayMenu: MenuItem[] = [
    {
        id: 'm101',
        name: 'South Indian Veg Meals',
        description: 'Unlimited rice, sambar, rasam, poriyal, and appalam.',
        price: 80,
        category: 'Main Course',
        dietaryPreference: 'Veg',
        uiColor: '#80B918',
        availability: 'Available',
        imagePlaceholder: '🍛',
        image: 'https://images.pexels.com/photos/376442/pexels-photo-376442.jpeg?auto=compress&cs=tinysrgb&w=800', // Pexels replacement
        addOns: [
            { id: 'a1', name: 'Extra Papad', price: 10 },
            { id: 'a2', name: 'Curd Cup', price: 15 },
        ],
    },
    {
        id: 'm102',
        name: 'Chettinad Chicken Biryani',
        description: 'Spicy, aromatic basmati rice cooked with tender chicken pieces.',
        price: 140,
        category: 'Main Course',
        dietaryPreference: 'Non-Veg',
        uiColor: '#FF4D6D',
        availability: 'Few Left',
        imagePlaceholder: '🍗',
        image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800', // Pexels replacement
        addOns: [
            { id: 'a3', name: 'Boiled Egg', price: 15 },
            { id: 'a4', name: 'Extra Raita', price: 10 },
        ],
    },
    {
        id: 'm103',
        name: 'Evening Samosa Chaat',
        description: 'Crushed samosas topped with chana masala, yogurt, and chutneys.',
        price: 45,
        category: 'Snacks',
        dietaryPreference: 'Veg',
        uiColor: '#FF9F1C',
        availability: 'Available',
        imagePlaceholder: '🥟',
        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800', // Pexels replacement
        addOns: [],
    },
    {
        id: 'm104',
        name: 'Filter Coffee',
        description: 'Classic strong South Indian filter coffee.',
        price: 20,
        category: 'Beverages',
        dietaryPreference: 'Veg',
        uiColor: '#80B918',
        availability: 'Available',
        imagePlaceholder: '☕',
        image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800', // Pexels replacement
        addOns: [],
    },
];
