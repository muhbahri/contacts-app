/* eslint-disable react/prop-types */
import React from "react";

function ContactItemBody({ name, tag }) {
  return (
    <div className="contact-item-body">
      <h3 className="contact-item-title">{name}</h3>
      <p className="contact-item-username">@{tag}</p>
    </div>
  );
}

export default ContactItemBody;
