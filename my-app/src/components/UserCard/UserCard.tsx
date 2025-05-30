import { Link } from 'react-router';
import type { UserCardProps } from '../../types/user';
import styles from './UserCard.module.css';

function UserCard ({ user, onAddToFavorites, isFavorite }: UserCardProps) {
    const hue = (user.id * 137) % 360;  
    
    return (
        <div className={styles['user-card']} style={{ '--random-hue': hue } as React.CSSProperties}>
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>

            <button onClick={() => onAddToFavorites(user)} className={styles['user-button']}>
                {isFavorite ? '❌ Remove from Favorites' : '⭐ Add to Favorites'}
            </button>

            <Link to={`/user/${user.id}`} className={styles['user-button']}>
                ⚙️ More info
            </Link>
        </div>
    )
};

export default UserCard;