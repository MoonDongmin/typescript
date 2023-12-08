const LogLevel = {
    Debug: "Debug",
    Info: "HIHIHIHIHIHIHIHI",
    Error: "ErrorErrorErrorErrorError",
} as const;

type LogLevel = typeof LogLevel[keyof typeof LogLevel]; // 이게 유니온

const a: LogLevel = LogLevel.Debug;

console.log(a);