import React from "react";

export default function NewsList({ news = [], onSelect }) {
  return (
    <div className="news-list">
      {news.map((item) => {
        return (
          <div onClick={() => onSelect(item.key)} className="news-card" key={item.key}>
            <img src={item.thumb} alt="news title" />
            <div className="news-detail">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
