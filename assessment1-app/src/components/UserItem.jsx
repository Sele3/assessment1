import React from 'react';

const UserItem = ({user}) => {
    return (
        <div className="py-2 border-b border-gray-200">
            <h3 className="font-semibold">{user.name} ({user.username})</h3>
            <p className="text-gray-700">Email: {user.email}</p>
            <p className="text-gray-700">Phone: {user.phone}</p>
            <p className="text-gray-700">Company: {user.company.name}</p>
            <p className="text-gray-500">Website: <a href={`http://${user.website}`} target="_blank"
                                                     rel="noopener noreferrer">{user.website}</a></p>
        </div>
    );
};

export default UserItem;
