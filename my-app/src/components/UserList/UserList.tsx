import { useState, useEffect } from 'react'

import UserCard from '../UserCard/UserCard'
import styles from './UserList.module.css'
import type { User, UserListProps } from '../../types/user'

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

function UserList({ users }: UserListProps) {
    const [bestUsers, setBestUsers] = useState<User[]>(() => {
        const saved = localStorage.getItem('favoriteUsers');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('favoriteUsers', JSON.stringify(bestUsers));
    }, [bestUsers]);

    const addToFavorites = (user: User) => {
        setBestUsers(prev => {
            if (prev.some(favUser => favUser.id === user.id)) {
                return prev.filter(favUser => favUser.id !== user.id);
            }
            return [...prev, user];
        });
    };

    if (!users) return <p>No users</p>;

    const regularUsers = users.filter(user => 
        !bestUsers.some(favUser => favUser.id === user.id)
    );

    return (
        <div>
            {bestUsers.length > 0 && (
                <div>
                    <h2>Favorite users:</h2>
                    <div className={styles.userList}>
                        {bestUsers.map(user => (
                            <UserCard 
                                key={user.id} 
                                user={user} 
                                onAddToFavorites={addToFavorites}
                                isFavorite={true}
                            />
                        ))}
                    </div>
                </div>
            )}

            <div>
                <h2>All users:</h2>
                <div className={styles.userList}>
                    {regularUsers.map(user => (
                        <UserCard 
                            key={user.id} 
                            user={user} 
                            onAddToFavorites={addToFavorites}
                            isFavorite={false}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserList;