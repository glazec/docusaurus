import React from 'react';
import { useState, useEffect } from "react";

export default function Coin() {
    const [marketCap, setMarketCap] = useState(0);
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://api.npms.io/v2/search?q=react')
            .then(response => response.json())
            .then(data => setMarketCap(data.total));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    if (marketCap != 0) {
        return <p>Current Price: {marketCap}</p>
    }
    return <p></p>
}
