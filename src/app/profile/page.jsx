"use client"
import { UpdateUserModal } from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  if (!user) {
    toast.error("Error occurred while signing in!");
  }
  if (user) {
    toast.success("Sign in successful!");
  }
  return (
    <div>
      <Card className='max-w-96 mx-auto flex flex-col items-center border mt-5'>
        <Avatar className="w-20 h-20">
          <Avatar.Image alt="John Doe" src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>F</Avatar.Fallback>
        </Avatar>
        <h2 className='text-xl font-bold'>{user?.name}</h2>
        <p className='text-gray-500'>{user?.email}</p>

        <UpdateUserModal></UpdateUserModal>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default ProfilePage;