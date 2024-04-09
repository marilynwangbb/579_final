import { useState } from "react"
const AffirmationItem = () => {
    const [quote, setQuote] = useState('You are Brilliant!');

    const getQuote = () => {
        fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => {
            const randomQuote = data[Math.floor(Math.random() * data.length)];
            setQuote(randomQuote.text); // Assuming each quote object has a text property
        })
        .catch(error => console.error('Error fetching quotes:', error)); // It's good to catch any errors from the fetch
    };

    useEffect(() => {
        getQuote();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className="quote-banner" style={{ position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: 'lightblue', padding: '10px', textAlign: 'center' }}>
            {quote}
        </div>
    );
};

export default AffirmationItem;
