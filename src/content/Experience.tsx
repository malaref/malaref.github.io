import StyledText from '../components/StyledText';
import useColors from '../util/Colors';
import Card from '../components/Card';

export default function Experience() {
    const colors = useColors()
    return <>
        <Card color={'secondary'}>
            <StyledText italic={true} underline={true}>Software Development Engineer</StyledText>
            <StyledText>Microsoft ― Edge Shopping & Skype</StyledText>
        </Card>

        <Card color={'secondary'}>
            <StyledText italic={true} underline={true}>Teaching Assistant</StyledText>
            <StyledText>Cairo University ― Faculty of Engineering</StyledText>
            <StyledText>Zewail City ― University of Science and Technology</StyledText>
            <StyledText>The American University in Cairo ― CSCE</StyledText>
            <StyledText>University of Ottawa ― DEBI</StyledText>

        </Card>
        
        <Card color={'secondary'}>
            <StyledText italic={true} underline={true}>Master of Artificial Intelligence</StyledText>
            <StyledText>Zewail City ― University of Science and Technology</StyledText>

        </Card>

        <Card color={'secondary'}>
            <StyledText italic={true} underline={true}>Bachelor of Computer Engineering</StyledText>
            <StyledText>Cairo University ― Faculty of Engineering</StyledText>
        </Card>
    </>
}