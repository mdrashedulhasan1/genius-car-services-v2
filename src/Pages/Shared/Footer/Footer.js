import React from 'react';
import { useState } from 'react';

const Footer = () => {
    const [date, setDate] = useState(new Date().getFullYear());
    return (
        <div>
            <h1>copyright@{date}</h1>
        </div>
    );
};

export default Footer;