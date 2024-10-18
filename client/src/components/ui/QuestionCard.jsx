import React, { useState, useEffect } from "react";
import axios from "axios";

// const testCards = [
//     {
//       id: 1,
//       title: "Жим лёжа",
//       picture: "https://sportwiki.to/images/6/67/Sil_men.jpg",
//     },
//     {
//       id: 2,
//       title: "Становая тяга",
//       picture: "https://sportwiki.to/images/0/0e/Silov_men84.jpg",
//     },
//     {
//       id: 3,
//       title: "Пауэрлифтинг",
//       picture: "https://sportwiki.to/images/f/fa/Silov_men112.jpg",
//     },
//     {
//       id: 4,
//       title: "Бёрпи",
//       picture: "https://sportwiki.to/images/1/11/Burpee1.jpg",
//     },
//   ];


  export default function QuestionCard({ themeId }) {
    const [cards, setCards] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
  
    useEffect(() => {
      const fetchCards = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/:ThemeId`); 
          setCards(response.data); 
        } catch (err) {
          setError("Ошибка при загрузке вопросов"); 
        } finally {
          setLoading(false); 
        }
      };
  
      fetchCards(); 
    }, [themeId]); 
  
    if (loading) return <div>Загрузка...</div>; // добавить лоадер потом
    if (error) return <div>{error}</div>; 
  
  return (
    <div
      className="card text-white bg-dark"
      style={{ 
        margin: "20px", 
        borderRadius: "10px", 
        boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)"
      }}
    >
      <div className="card-body">
        <h5 className="card-title text-center">Nighthawk Trivia</h5>
        <p className="card-text text-center display-6">
          Do common nighthawks make nests?
        </p>
        <div className="d-flex flex-column align-items-center">
          <a
            href="#"
            className="btn btn-outline-light mb-2"
            style={{ width: "80%" }}
          >
            Да
          </a>
          <a
            href="#"
            className="btn btn-outline-light mb-2"
            style={{ width: "80%" }}
          >
            Нет
          </a>
          <a
            href="#"
            className="btn btn-outline-light mb-2"
            style={{ width: "80%" }}
          >
            Третий вариант ответа
          </a>
          <a
            href="#"
            className="btn btn-outline-light mb-2"
            style={{ width: "80%" }}
          >
            Четвертый вариант ответа
          </a>
        </div>
      </div>
    </div>
  );
}
