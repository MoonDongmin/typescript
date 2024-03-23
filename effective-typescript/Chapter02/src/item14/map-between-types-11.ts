interface Options {
    width: number;
    height: number;
    color: string;
    label: string;
}

// type OptionsUpdate = {[k in keyof Options]?: Options[k]};

type OptionsKeys = keyof Options;
// Type is "width" | "height" | "color" | "label"