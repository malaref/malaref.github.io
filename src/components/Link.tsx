import { Linking, Pressable } from 'react-native';
import useColors from '../util/Colors';
import StyledText, { TextSize } from './StyledText';

interface LinkProps {
    children?: React.ReactNode,
    url: string,
}

export default function Link(props: LinkProps) {
    const colors = useColors()
    return (
        // @ts-ignore
        <Pressable onPress={() => { Linking.openURL(props.url, '_self') }} style={{
            padding: 30,
            borderRadius: 10,
        }}>
            <StyledText size={TextSize.SMALL}>{props.children}</StyledText>
        </Pressable>
    )
}