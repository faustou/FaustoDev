const LightTheme = {
  text: "#1E1E1E",                   // Texto principal oscuro
  textMuted: "#555555",              // Texto secundario / descripciones
  primary: "#a897bf",                // Azul sobrio y profesional
  secondary: "#a259ff",              // Lavanda grisáceo como acento
  terciary: "#F7F7F9",               // Fondos internos (cards, containers)
  bg: "linear-gradient(to right,rgb(197, 194, 194),rgb(175, 175, 205))", // Fondo principal
  border: "#DADADA",                 // Bordes / líneas suaves
  iconBg: "#E0E0E6",                 // Fondo de los iconos circulares
};

const DarkTheme = {
  text: "#EDEDED",                   // Texto principal claro
  textMuted: "#A8A8A8",              // Texto secundario o descripciones
  primary: "#111",                // Color destacado: botones, iconos, links
  secondary: "#a259ff22",              // Cian grisáceo sutil
  terciary: "#1E1E2F",               // Cards / containers internos
  bg: "radial-gradient(circle at top left, #0f0f23, #08080f)", // Fondo principal
  border: "#2C2C36",                 // Bordes o separadores
  iconBg: "#2A2A3A",                 // Fondo de iconos circulares
};

const theme = {
  light: LightTheme,
  dark: DarkTheme,
};

export default theme;
