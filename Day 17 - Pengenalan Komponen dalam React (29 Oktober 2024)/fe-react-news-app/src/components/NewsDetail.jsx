export default function Newsdata({ data, onSelect }) {
  const renderContent = () => {
    const { content } = data;
    if (!content) return null;

    return content.map((item, index) => {
      if (item.startsWith("http") && item.includes(".jpg")) {
        return (
          <img
            key={index}
            src={item}
            alt="image content"
            style={{ width: "100%", marginBottom: "10px" }}
            className="content-image"
          />
        );
      } else if (item.startsWith("http") && item.includes("youtube.com")) {
        return (
          <div
            key={index}
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%",
              height: 0,
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={item}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0 }}
            ></iframe>
          </div>
        );
      } else {
        return <p key={index}>{item}</p>;
      }
    });
  };

  return (
    <>
      {data && (
        <div className="news-data-container">
          <button onClick={() => onSelect(null)} className="back-button">
            Back
          </button>
          <h1>{data.title}</h1>
          <h2>
            By {data.author} on {data.date}
          </h2>
          <div>{renderContent()}</div>
        </div>
      )}
    </>
  );
}
