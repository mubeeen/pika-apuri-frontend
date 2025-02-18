// pages/profiles/[role].tsx

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/redux/store'; 

const ProfilePage = () => {
  const router = useRouter();
  const { role } = router.query;  
  const loggedInRole = useAppSelector((state) => state.auth.accountType);  
  // const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loggedInRole) {
      setError('User is not logged in');
      return;
    }

    if (role !== loggedInRole) {
      setError('You are not authorized to view this profile');
      return;
    }

    // Fetch the profile data for the role (buyer or seller)
    // fetchProfile(role);
  }, [role, loggedInRole]);

  // const fetchProfile = async (role: string) => {
  //   try {
  //     const response = await fetch(`/api/profiles/${role}`);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setUser(data.profile);
  //     } else {
  //       setError('Profile not found');
  //     }
  //   } catch (error) {
  //     setError('An error occurred while fetching the profile');
  //   }
  // };

  if (error) return <div>{error}</div>;

  return (
    <div>
      {role}
      <h1>On the role page</h1>
      {/* <h1>Profile for {user?.name || 'Loading...'}</h1> */}
      {/* <p>Role: {user?.role}</p> */}
      {/* Render other profile info */}
    </div>
  );
};

export default ProfilePage;
