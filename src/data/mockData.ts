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
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80',
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
        image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&q=80',
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
        image: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=800&q=80',
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
        image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80',
        addOns: [],
    },
];
