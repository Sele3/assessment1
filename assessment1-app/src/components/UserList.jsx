import React from 'react';
import UserItem from './UserItem';

const UserList = ({users}) => {
    return (
        <div className="max-w-full overflow-auto">
            <h2 className="text-xl font-semibold mb-2">User List</h2>
            <ul className="list-disc list-inside flex flex-wrap">
                {users.map((user) => (
                    <li key={user.id} className="w-full sm:w-1/2 lg:w-1/3 p-2"> {}
                        <UserItem user={user}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
