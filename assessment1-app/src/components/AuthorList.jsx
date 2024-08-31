import React from 'react';

const AuthorList = ({authors}) => {
    return (
        <ul>
            {authors.map((author, index) => (
                <li key={index} className="text-lg font-semibold text-blue-600">
                    {author}
                </li>
            ))}
        </ul>
    );
};

export default AuthorList;
