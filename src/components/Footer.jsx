import React from 'react'


    const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f2f2f2",
      }}
    >
      <p>&copy; 2025 MonSiteWeb. Tous droits réservés.</p>
      <p>
        <a href="#">Accueil</a> |{" "}
        <a href="#">À propos</a> |{" "}
        <a href="#">Contact</a>
      </p>
    </footer>
  );
};
  
export default Footer