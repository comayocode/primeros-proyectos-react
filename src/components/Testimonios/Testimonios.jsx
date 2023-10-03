import React, { useState } from "react";
import testimoniosJson from "../../data/Testimonios.json";
import Testimonio from "./Testimonio";

const Testimonios = () => {
  const [testimonios] = useState(testimoniosJson);

  return (
    <div className="testimonios-map">
      {testimonios.map((testimonio) => {
        return (
          <>
            <Testimonio
              key={testimonio.id}
              nombre={testimonio.nombre}
              pais={testimonio.pais}
              imagen={testimonio.imagen}
              cargo={testimonio.cargo}
              empresa={testimonio.empresa}
              testimonio={testimonio.testimonio}
            />
          </>
        );
      })};
    </div>
  );
};

export default Testimonios;
