import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setUserData } from '../features/profile/profileSlice'; // Adjust the path as needed
import { fetchUserData } from '../api/get-user-data';

const ProfileCards: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const userData = useSelector((state: RootState) => state.profile.userData);

    useEffect(() => {
        const getUserData = async () => {
            const storedUserData = localStorage.getItem('userData');
            if (storedUserData) {
                dispatch(setUserData(JSON.parse(storedUserData)));
            } else {
                try {
                    debugger;
                    const data = await fetchUserData();
                    localStorage.setItem('userData', JSON.stringify(data));
                    dispatch(setUserData(data));
                } catch (error) {
                    console.error('Failed to fetch user data:', error);
                }
            }
        };

        getUserData();
    }, [dispatch]);

    return (
        <div>
            <h2>Profile Cards</h2>
            {userData ? (
                <div>
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
};

export default ProfileCards;
