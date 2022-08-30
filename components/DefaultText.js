import { Text } from 'react-native'


const DefaultText = ({children, style}) => {

    //배열 형식으로 fontStyle 변수에 담기
    let fontStyle = [{fontFamily:'AppleSDGothicNeoM'}]
    if(style){
        if(Array.isArray(style)){
            fontStyle = fontStyle.concat(style)
        }else{
            fontStyle.push(style)
        }
    }

    return (
        <Text style={fontStyle}>{children}</Text>
    )
}

export default DefaultText