import React, { useState, useEffect } from "react";
import "./App.css";
import "./hearts.css";

const App = () => {
    const [hearts, setHearts] = useState([]);
    const [noPosition, setNoPosition] = useState({ top: "50%", left: "60%" });

    // Generate floating hearts
    useEffect(() => {
        const interval = setInterval(() => {
            setHearts((prev) => [...prev, { id: Date.now(), left: Math.random() * 100 }]);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    // Move "No" button away when hovered
    const moveNoButton = () => {
        const randomX = Math.random() * 60 + 20;
        const randomY = Math.random() * 60 + 20;
        setNoPosition({ top: `${randomY}%`, left: `${randomX}%` });
    };

    return (
        <div className="container">
            {/* Floating Hearts */}
            {hearts.map((heart) => (
                <span key={heart.id} className="heart" style={{ left: `${heart.left}%` }}>
                    ❤️
                </span>
            ))}

            <div className="heart-bg"></div>
            <div className="card">
                <h1 className="heart-beat">💖 My Love 💖</h1>
                <p>You are the most beautiful thing that has ever happened to me.  
                   Every moment with you is magical! ✨💑</p>
                <p className="big-text">Will you be mine for 84,00,000 Janam? 😘</p>

                <div className="button-group">
                    <button className="yes-btn">YES 💕</button>
                    <button
                        className="no-btn"
                        style={{ top: noPosition.top, left: noPosition.left }}
                        onMouseEnter={moveNoButton}
                    >
                        NO 😜
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
