import { DimensionValue, View } from 'react-native';
import useColors from '../util/Colors';

interface PaperProps {
    children?: React.ReactNode,
}

export default function Paper(props: PaperProps) {
    const colors = useColors()
    return (
        <View style={{
            width: '100vw' as DimensionValue,
            height: '100vh' as DimensionValue,
            alignItems: 'center',
            display: 'flex',
            backgroundColor: colors.background,
        }}>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                }}>
                <View style={{
                    width: '80%',
                    maxWidth: '1000px' as DimensionValue,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    borderColor: colors.secondary,
                    borderWidth: 1.5,
                    borderRadius: 10,
                    overflow: 'hidden',
                }}>
                    {props.children}
                </View>
            </View>
        </View>

    )
}