export type Category = {
    id: string;
    name: string;
    icon: string;
};

export type AddOn = {
    id: string;
    name: string;
    price: number;
};

export type MenuItem = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    dietaryPreference: 'Veg' | 'Non-Veg';
    uiColor: string;
    availability: 'Available' | 'Few Left' | 'Sold Out';
    imagePlaceholder: string;
    image?: string;
    addOns: AddOn[];
};

export type User = {
    employeeId: string;
    name: string;
    department: string;
};

export type CartItem = {
    id: string; // unique cart item id
    menuItem: MenuItem;
    selectedAddOns: AddOn[];
    quantity: number;
};
