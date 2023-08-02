import { UserButton } from '@clerk/nextjs';
import React from 'react';

const DashboardPage = () => {
    return (
        <div>
            <h2>DashboardPage (protected)</h2>
            <UserButton afterSignOutUrl='/' />
        </div>
    );
};

export default DashboardPage;