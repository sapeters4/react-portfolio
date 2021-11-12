import React from "react";
import profilePicture from "../../../static/assets/images/bio/perfil2.jpeg"

export default function() {
  return (
  <div className="content-page-wrapper">
    <div className="container"> 
      <div className="left-column" 
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "8px"
        }} 

      />
      <div className="right-column">
        <div className="content">
          <h1>Lorme Ipsum</h1>
          <p>dolor sit amet consectetur, adipisicing elit. Perferendis magnam nisi, animi maiores praesentium 
            quidem distinctio repellendus recusandae eum alias tempore dignissimos aspernatur sunt, nulla saepe! Quae, 
            obcaecati totam temporibus aspernatur, laboriosam ut,  ratione sint impedit sunt voluptate voluptatibus corrupti 
            eum pariatur nemo! Saepe enim commodi atque fugiat exercitationem sed quae, laborum a, quibusdam rerum laudantium delectus non unde. Debitis?
          </p>

        </div>
      </div>
    </div>
  </div>
  );
}