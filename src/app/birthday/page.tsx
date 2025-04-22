"use client";
import React from "react";

export default function BirthdayPage() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
      fontFamily: 'Montserrat, sans-serif',
      overflow: "hidden"
    }}>
      <h1 style={{
        fontSize: "3rem",
        color: "#fff",
        textShadow: "2px 2px 8px #ff6f61"
      }}>
        🎉 Happy Birthday Krishna Shrivastav! 🎉
      </h1>
      <p style={{
        fontSize: "1.5rem",
        color: "#fff",
        margin: "1rem 0 2rem 0",
        textAlign: "center",
        maxWidth: "600px",
        textShadow: "1px 1px 6px #ffb88c"
      }}>
        Wishing you a fantastic year ahead filled with joy, success, and all your dreams coming true. Enjoy your special day to the fullest!
      </p>
      <div style={{ position: "relative", width: "100vw", height: "200px" }}>
        {/* Balloons and confetti SVGs for festive visuals */}
        <svg style={{ position: "absolute", left: "20%", top: 0 }} width="60" height="180" viewBox="0 0 60 180"><ellipse cx="30" cy="60" rx="28" ry="40" fill="#ff6f61"/><rect x="28" y="100" width="4" height="60" fill="#b5651d"/><circle cx="30" cy="100" r="6" fill="#fff"/></svg>
        <svg style={{ position: "absolute", left: "50%", top: 0 }} width="60" height="180" viewBox="0 0 60 180"><ellipse cx="30" cy="60" rx="28" ry="40" fill="#f7d716"/><rect x="28" y="100" width="4" height="60" fill="#b5651d"/><circle cx="30" cy="100" r="6" fill="#fff"/></svg>
        <svg style={{ position: "absolute", left: "80%", top: 0 }} width="60" height="180" viewBox="0 0 60 180"><ellipse cx="30" cy="60" rx="28" ry="40" fill="#6ec6ff"/><rect x="28" y="100" width="4" height="60" fill="#b5651d"/><circle cx="30" cy="100" r="6" fill="#fff"/></svg>
      </div>
      <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", pointerEvents: "none", zIndex: 0 }}>
        {/* Confetti SVG */}
        <svg width="100vw" height="100vh">
          <circle cx="20" cy="40" r="4" fill="#ff6f61"/>
          <circle cx="120" cy="80" r="5" fill="#f7d716"/>
          <circle cx="220" cy="60" r="3" fill="#6ec6ff"/>
          <circle cx="320" cy="120" r="4" fill="#ffb88c"/>
          <circle cx="420" cy="30" r="6" fill="#b5651d"/>
          <circle cx="520" cy="90" r="4" fill="#ff6f61"/>
        </svg>
      </div>
    </div>
  );
}
