import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function QuestionCard() {
  const { themeId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        console.log("Тема ID:", themeId);
        const response = await axios.get(
          `http://localhost:3000/api/${themeId}`
        );
        const questionsData = response.data;

        setQuestions(questionsData);
        loadQuestion(questionsData[0]);
      } catch (err) {
        setError(`Ошибка при загрузке вопросов: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [themeId]);

  const loadQuestion = (question) => {
    const allAnswers = [
      question.Ans1,
      question.Ans2,
      question.Ans3,
      question.RightAns,
    ];

    setAnswers(mixAnswers(allAnswers));
    setCorrectAnswer(question.RightAns);
  };

  const mixAnswers = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      loadQuestion(questions[nextIndex]);
      setSelectedAnswer(null);
    } else {
      navigate("/endGame");
    }
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  const currentQuestion = questions[currentQuestionIndex];

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
        <p className="card-text text-center display-6">
          {currentQuestion.Text}
        </p>
        <div className="d-flex flex-column align-items-center">
          {answers.map((answer, index) => (
            <button
              key={index}
              className="btn mb-2"
              style={{
                width: "80%",
                backgroundColor:
                  selectedAnswer === answer
                    ? answer === correctAnswer
                      ? "green"
                      : "red"
                    : "transparent",
                color: "white",
              }}
              onClick={() => handleAnswer(answer)}
            >
              {answer}
            </button>
          ))}
        </div>
        <button className="btn btn-primary mt-3" onClick={handleNextQuestion}>
          Следующий вопрос
        </button>
      </div>
    </div>
  );
}
