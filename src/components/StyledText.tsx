import { Text } from 'react-native';
import useColors from '../util/Colors';

export enum TextSize {
    SMALL = 25,
    NORMAL = 30,
    LARGE = 40,
    HUGE = 50,
}

interface StyledTextProps {
    children?: React.ReactNode,
    size?: TextSize,
    italic?: boolean,
    bold?: boolean,
    underline?: boolean,
}

export default function StyledText(props: StyledTextProps) {
    const colors = useColors()
    return <Text style={{
        color: colors.foreground,
        fontSize: props.size ?? TextSize.NORMAL,
        fontStyle: props.italic ? 'italic' : 'normal',
        fontWeight: props.bold ? 'bold' : 'normal',
        textDecorationLine: props.underline ? 'underline' : 'none',
        fontFamily: 'serif',
    }}>{ props.children }</Text>
}