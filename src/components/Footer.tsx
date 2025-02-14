import React from "react";

interface FooterProps {
  handleToggleModal: () => void;
  data: object | null;
}

export default function Footer({ data, handleToggleModal }: FooterProps) {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>{data?.title}</h2>
        <h1>Credits: {data?.copyright}</h1>
      </div>
      <button>
        <i
          className="fa-solid fa-circle-info"
          onClick={() => {
            handleToggleModal();
          }}
        ></i>
      </button>
    </footer>
  );
}
