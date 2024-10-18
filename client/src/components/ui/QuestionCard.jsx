import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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

export default function QuestionCard() {
  const { themeId } = useParams();
  const [question, setQuestion] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/${themeId}`
        );
        setQuestion(response.data);
        
        const allAnswers = [
          response.data.Ans1,
          response.data.Ans2,
          response.data.Ans3,
          response.data.RightAns,
        ];

        setAnswers(mixAnswers(allAnswers));
        setCorrectAnswer(response.data.RightAns);
      } catch (err) {
        setError("Ошибка при загрузке вопросов", err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [themeId]);

  const mixAnswers = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  if (loading) return <div>Загрузка...</div>; // добавить лоадер потом
  if (error) return <div>{error}</div>;

  return (
    <div
      className="card text-white bg-dark"
      style={{
        margin: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
      }}
    >
      <div className="card-body">
        <h5 className="card-title text-center">Nighthawk Trivia</h5>
        <p className="card-text text-center display-6">{question.text}</p>
        <div className="d-flex flex-column align-items-center">
          {answers.map((answer, index) => (
            <a
              key={index}
              href="#"
              className="btn btn-outline-light mb-2"
              style={{ width: "80%" }}
            >
              {answer}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
