import React, { useState, useEffect } from 'react';

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [postedNames, setPostedNames] = useState<string[]>([]);

    const handleSearch = (event: any) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.endsWith('@')) {
           
            setSuggestions(['Abc', 'Xyz', 'Hgf', 'Mno']);
        } else {
            setSuggestions([]);
        }
    };

    const handlePost = () => {
        setPostedNames(prevNames => [...prevNames, searchTerm]);
        setSearchTerm('');
    };

    useEffect(() => {
        
        setSuggestions([]);
    }, [postedNames]);

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Create a post"
            />
            <ul>
                {suggestions.map((name, index) => (
                    <li key={index} onClick={() => setSearchTerm(searchTerm + name)}>
                        {name}
                    </li>
                ))}
            </ul>
            <button onClick={handlePost}>Post</button>
            <div>
                {postedNames.map((name, index) => (
                    <p key={index}>{name}</p>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
