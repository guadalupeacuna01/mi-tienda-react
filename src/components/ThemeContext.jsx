import { createContext } from "react";

export const tema ={
    claro:{
        font: "black",
        background: "white"
    },
    primavera:{
        font: "black",
        background: "lightyellow"
    }
    }

const ThemeContext = createContext({
    temaActual: tema.claro,
    handleTema: () => {}
});

export default ThemeContext;
