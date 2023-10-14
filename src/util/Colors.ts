import { useColorScheme, ColorValue } from "react-native"

export interface ColorPalette {
    foreground: ColorValue,
    primary: ColorValue,
    secondary: ColorValue,
    background: ColorValue,
}

const COLORS = {
    light: {
        primary: '#FFC107',
        secondary: '#607D8B',
        foreground: '#212121',
        background: '#FFFFFF',
    },
    dark: {
        primary: '#18232c',
        secondary: '#141e26',
        foreground: '#e1e6eb',
        background: '#10181e',
    },
}

export default function useColors(): ColorPalette {
    return COLORS[useColorScheme() ?? 'light']
}