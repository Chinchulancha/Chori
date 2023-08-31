import React, { useState } from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";

export default function App() {
  const [text, setText] = useState("");

  return (
    <div className="text-white h-screen flex-col flex justify-center items">
      <textarea
        onChange={(e) => setText(e.target.value)}
        value={text}
        className="border p-2 bg-black font-semibold resize-none w-1/2 m-auto"
        name="textarea"
        rows="10"
        cols="50"
        placeholder="Escribele algo al chori"
      ></textarea>

      <div className="w-full flex justify-center">
        <a
          target={"_blank"}
          href={`https://api.whatsapp.com/send?phone=+5493415639022&text=${text}`}
          className="px-5 bg-green-500"
        >
          <button className="text-white py-10">Enviar</button>
        </a>
      </div>
    </div>
  );
}
