type Languages = "C" | "Java" | "TypeScript" | "React";
type TrueLanguages = Exclude<Languages, "React">;
type WebLanguages = Exclude<Languages, "React" | "C" | "Java">;