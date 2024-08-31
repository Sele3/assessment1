import React, {useEffect, useState} from 'react';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
import UserList from '../components/UserList';
import {fetchUsers} from '../services/userService';

const HomePage = () => {
    const [authors, setAuthors] = useState([]);
    const [users, setUsers] = useState([]);

    const handleAuthorSubmit = (authorName) => {
        setAuthors([...authors, authorName]);
    };

    useEffect(() => {
        const getUsers = async () => {
            try {
                const userData = await fetchUsers();
                setUsers(userData);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };

        getUsers();
    }, []);

    return (
        <div>
            <h1>Author Submission</h1>
            <AuthorForm onSubmit={handleAuthorSubmit}/>
            <h2>Submitted Authors</h2>
            <AuthorList authors={authors}/>
            <br/>
            <hr style={{border: '1px solid black'}}/>
            <br/>
            <UserList users={users}/>
        </div>
    );
};

export default HomePage;
