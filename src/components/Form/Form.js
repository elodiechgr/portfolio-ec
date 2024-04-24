import React from "react";
import "./Form.scss";

function Contact() {
  return (
    <div>
      <h1 className="h1-contact">
        Commencez à réaliser votre projet,
        <br />
        faisons connaissance
      </h1>
      <div className="row1">
        <div className="texte-contact">
          <p className="texte">
            Pour toute demande générale, n'hésitez pas à remplir le formulaire
            pour me contacter. <br />
            <br />
            Si toutefois vous avez déjà défini les détails de votre projet, je
            vous invite à m'en faire part pour bénéficier d'un processus plus
            structuré et personnalisé.
          </p>
        </div>
        <div className="form">{/* Votre formulaire ici */}</div>
      </div>
    </div>
  );
}

export default Contact;
