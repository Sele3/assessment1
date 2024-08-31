import React, {useState} from 'react';

const AuthorForm = ({onSubmit}) => {
    const [authorName, setAuthorName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (authorName) {
            onSubmit(authorName);
            setAuthorName('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col mb-4">
            <input
                type="text"
                placeholder="Author Name"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                required
                className="border border-gray-300 p-2 rounded mb-2"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Submit
            </button>
        </form>
    );
};

export default AuthorForm;
