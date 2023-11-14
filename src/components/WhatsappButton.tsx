import Link from "next/link";
import React, { useState } from "react";

const WhatsAppButton = () => {
  const [href, setHref] = useState("http://mst.pe/CajaSullanaWhatsApp");

  return (
    <Link
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
    </Link>
  );
};

export default WhatsAppButton;