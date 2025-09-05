import React, { useState } from "react";

<<<<<<< HEAD
=======

>>>>>>> 9cd7a52 (Second version: updated features and fixes)
const styles = {
  container: {
    perspective: 1000,
    width: 300,
    height: 300,
<<<<<<< HEAD
    margin: "1rem",
=======
    margin: "auto",
>>>>>>> 9cd7a52 (Second version: updated features and fixes)
  },
  card: {
    width: "100%",
    height: "100%",
    position: "relative",
    transformStyle: "preserve-3d",
    transition: "transform 0.6s",
    cursor: "pointer",
<<<<<<< HEAD
=======
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    borderRadius: 12,
>>>>>>> 9cd7a52 (Second version: updated features and fixes)
  },
  cardFlipped: {
    transform: "rotateY(180deg)",
  },
  frontBack: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    padding: 16,
    color: "#fff",
  },
  front: {
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  back: {
    backgroundColor: "#00AEEF",
    transform: "rotateY(180deg)",
  },
<<<<<<< HEAD
=======
  title: {
    margin: 0,
    textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
  },
  description: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: "1rem",
    padding: "0 1rem",
  },
>>>>>>> 9cd7a52 (Second version: updated features and fixes)
};

export default function FlipCard({ title, description, frontImage }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      style={styles.container}
      onClick={() => setFlipped(!flipped)}
      onKeyDown={(e) => {
        if (e.key === "Enter") setFlipped(!flipped);
      }}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
<<<<<<< HEAD
=======
      aria-label={`Flip card for ${title}`}
>>>>>>> 9cd7a52 (Second version: updated features and fixes)
    >
      <div
        style={{
          ...styles.card,
          ...(flipped ? styles.cardFlipped : {}),
        }}
      >
        <div
          style={{
            ...styles.frontBack,
            ...styles.front,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${frontImage})`,
          }}
        >
<<<<<<< HEAD
          <h3 style={{ margin: 0 }}>{title}</h3>
        </div>

        <div style={{ ...styles.frontBack, ...styles.back }}>
          <p style={{ textAlign: "center" }}>{description}</p>
=======
          <h3 style={styles.title}>{title}</h3>
        </div>

        <div style={{ ...styles.frontBack, ...styles.back }}>
          <p style={styles.description}>{description}</p>
>>>>>>> 9cd7a52 (Second version: updated features and fixes)
        </div>
      </div>
    </div>
  );
}
