import { Image, View } from 'react-native';
import StyledText, { TextSize } from '../components/StyledText';
import Card from '../components/Card';

export default function Headline() {
    return (
        <Card color='primary'>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                <View>
                    <StyledText size={TextSize.HUGE}>Muhammad AlAref</StyledText>
                    <StyledText size={TextSize.LARGE}>Computer Engineer</StyledText>
                </View>
                <Image source={{ uri: '/malaref.jpg', width: 150, height: 150 }} style={{
                    borderRadius: 75,
                    alignSelf: 'flex-end',
                    marginLeft: 'auto',
                }} />
            </View>
        </Card>
    )
}