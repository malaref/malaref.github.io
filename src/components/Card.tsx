import { View } from 'react-native';
import useColors, { ColorPalette } from '../util/Colors';

interface CardProps {
    children?: React.ReactNode,
    color: keyof ColorPalette,
}

export default function Card(props: CardProps) {
    const colors = useColors()
    return (
        <View style={{
            width: '100%',
            display: 'flex',
            padding: 40,
            backgroundColor: colors[props.color],
        }}>
            {props.children}
        </View>
    )
}