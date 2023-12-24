import { useEffect, useState } from 'react';
import { auth } from '../../config/firebase-config'; // Replace '../firebase-config' with the correct path to your Firebase configuration file.

const AccountPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if a user is logged in
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <p>User ID: {user.uid}</p>
          {/* Display other user information */}
        </div>
      ) : (
        <p>Please sign in to view your account information.</p>
      )}
    </div>
  );
};

export default AccountPage;
