import { useState, useEffect } from "react";
import useAuth from "../../utils/useAuth";
import "./item.css";

const ReadAll = () => {
  const [user, setUser] = useState();
  const [allItems, setAllItems] = useState();
  useAuth();

  const getUserInfo = async () => {
    const response = await fetch("http://localhost:8080/user/info", {
      credentials: "include",
    });
    const jsonResponse = await response.json();
    setUser(jsonResponse.user);
  };
  const getAllItems = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=jp&apiKey=cc7792a928c842f3bbf3f888cfe80e5b"
    );
    const jsonResponse = await response.json();
    setAllItems(jsonResponse.articles);
  };

  useEffect(() => {
    getUserInfo();
    getAllItems();
  }, []);

  return (
    <div>
      <h1>すべてのアイテムデータ</h1>
      {user && (
        <div>
          <p>{user.ID}</p>
          <p>{user.CreatedAt}</p>
          <p>{user.UpdatedAt}</p>
          <p>{user.DeletedAt}</p>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      )}

      <div className="container">
        {allItems &&
          allItems.map((article) => (
            <div className="card card-skin">
              <img
                className="card__imgframe"
                src={article.urlToImage}
                alt="img"
              ></img>
              <div className="card__textbox">
                <div className="card__titletext">{article.title}</div>
                <div className="card__overviewtext">
                  {article.description?.substring(0, 50) ?? ""}
                  ...
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReadAll;
