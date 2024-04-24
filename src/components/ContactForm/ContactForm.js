import React from "react";
import emailjs from "emailjs-com";
import "./ContactForm.scss"; // Importation du fichier de style SCSS

function ContactForm() {
  function handleSubmit(event) {
    event.preventDefault();

    // Remplacez les valeurs ci-dessous par les vôtres
    const serviceId = "YOUR_SERVICE_ID";
    const templateId = "YOUR_TEMPLATE_ID";
    const userId = "YOUR_USER_ID";

    emailjs.sendForm(serviceId, templateId, event.target, userId).then(
      (result) => {
        console.log(result.text);
        // Ajoutez ici la logique pour indiquer à l'utilisateur que le formulaire a été soumis avec succès
      },
      (error) => {
        console.log(error.text);
        // Ajoutez ici la logique pour indiquer à l'utilisateur qu'il y a eu une erreur lors de la soumission du formulaire
      }
    );
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Prénom :</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div>
          <label htmlFor="lastName">Nom :</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div>
          <label htmlFor="email">E-mail :</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="phone">Numéro de téléphone :</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div>
          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactForm;
