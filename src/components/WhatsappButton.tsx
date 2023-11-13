import React, { useState } from "react";

const WhatsAppButton = () => {
  const [href, setHref] = useState("https://wa.me/58123456789");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-0 right-0 w-[100px] h-[100px] mr-10 mb-10 rounded-full text-white"
    >
      <img
        src="/whatsapp.svg"
        alt="WhatsApp"
        className="w-full h-full"
      />
    </a>
  );
};

export default WhatsAppButton;