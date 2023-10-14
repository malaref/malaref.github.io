import { View } from 'react-native';
import Card from '../components/Card';
import Link from '../components/Link';

export default function Links() {
    return (
        <Card color='primary'>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-around',
            }}>
                <Link url='/malaref.pdf'>Resume</Link>
                <Link url='mailto:m@alaref.me'>Email</Link>
                <Link url='https://github.com/malaref'>GitHub</Link>
                <Link url='https://www.linkedin.com/in/malaref/'>LinkedIn</Link>
                
            </View>
        </Card>
    )
}