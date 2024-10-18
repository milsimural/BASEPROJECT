import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// const testThemes = [
//   {
//     id: 1,
//     title: "Жим лёжа",
//     picture: "https://sportwiki.to/images/6/67/Sil_men.jpg",
//   },
//   {
//     id: 2,
//     title: "Становая тяга",
//     picture: "https://sportwiki.to/images/0/0e/Silov_men84.jpg",
//   },
//   {
//     id: 3,
//     title: "Пауэрлифтинг",
//     picture: "https://sportwiki.to/images/f/fa/Silov_men112.jpg",
//   },
//   {
//     id: 4,
//     title: "Бёрпи",
//     picture: "https://sportwiki.to/images/1/11/Burpee1.jpg",
//   },
// ];

export default function ThemeCard() {
  const [themes, setThemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/");
        setThemes(response.data);
      } catch (err) {
        setError("Ошибка при загрузке тем");
      } finally {
        setLoading(false);
      }
    };
    fetchThemes();

  }, []);

  if (loading) return <div>Загрузка...</div>; // Добавить сюда потом красивый лоадер
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <div className="row">
        {themes.map((theme) => (
          <div className="col-md-4" key={theme.id}>
            <Link
              to={`/${theme.id}`}
              className="card mb-4"
              style={{
                textDecoration: "none",
                color: "inherit",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={theme.picture}
                alt={theme.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title text-center">{theme.title}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
