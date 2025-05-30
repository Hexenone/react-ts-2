import { useParams } from 'react-router';
import type { UserDetailsProps } from '../../types/user';
import styles from './UserDetails.module.css';

function UserDetails({ users }: UserDetailsProps) {
    const { id } = useParams();
    const user = users.find(u => u.id === Number(id));

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.userDetails}>
                <h1>{user.name}</h1>
                
                <div className={styles.section}>
                    <h2>Contact Information</h2>
                    <p>📧 Email: {user.email}</p>
                    <p>📱 Phone: {user.phone}</p>
                </div>

                <div className={styles.section}>
                    <h2>Address</h2>
                    <p>🏠 Street: {user.address.street}</p>
                    <p>🏢 Suite: {user.address.suite}</p>
                    <p>🌆 City: {user.address.city}</p>
                    <p>📮 Zipcode: {user.address.zipcode}</p>
                </div>

                <div className={styles.section}>
                    <h2>Location</h2>
                    <p>📍 Latitude: {user.address.geo.lat}</p>
                    <p>📍 Longitude: {user.address.geo.lng}</p>
                </div>
            </div>
        </div>
    );
}

export default UserDetails; 