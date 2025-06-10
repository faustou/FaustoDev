
export interface AppTheme {
  text: string;
  textMuted: string;
  primary: string;
  secondary: string;
  terciary: string;
  bg: string;
  border: string;
  iconBg: string;
}

export const LightTheme: AppTheme = {
  text: "#1E1E1E",
  textMuted: "#555555",
  primary: "#a897bf",
  secondary: "#a259ff",
  terciary: "#F7F7F9",
  bg: "linear-gradient(to right,rgb(197, 194, 194),rgb(175, 175, 205))",
  border: "#DADADA",
  iconBg: "#E0E0E6",
};

export const DarkTheme: AppTheme = {
  text: "#EDEDED",
  textMuted: "#A8A8A8",
  primary: "#111",
  secondary: "#a259ff22",
  terciary: "#1E1E2F",
  bg: "radial-gradient(circle at top left, #0f0f23, #08080f)",
  border: "#2C2C36",
  iconBg: "#2A2A3A",
};

const theme: Record<'light' | 'dark', AppTheme> = {
  light: LightTheme,
  dark: DarkTheme,
};

export default theme;
