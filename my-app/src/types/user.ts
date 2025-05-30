export type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
};

export type User = {
    id: number;
    name: string;
    email: string;
    phone: number;
    address: Address;
};

export type UseUsers = {
    users: User[];
};

export type UserListProps = UseUsers;

export type UserCardProps = {
    user: User;
    onAddToFavorites: (user: User) => void;
    isFavorite?: boolean;
};

export type UserDetailsProps = UseUsers; 