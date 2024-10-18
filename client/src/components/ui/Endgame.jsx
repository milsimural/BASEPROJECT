import React, { useState, useEffect } from "react";
import "./Endgame.css";

export default function Endgame() {
  const [showCat, setShowCat] = useState(true);
  const result = "5";
  const base = "7";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCat(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showCat ? (
        <div className="cat-animation">
          <img src="../../assets/endgame.png" />
        </div>
      ) : (
        <div>
          <h1>
            <span id="result">{result}</span> / <span id="base">{base}</span>
          </h1>
          <button>Сыграем еще?</button>
        </div>
      )}
    </div>
  );
}
