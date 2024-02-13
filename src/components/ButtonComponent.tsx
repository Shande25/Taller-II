import { View } from 'react-native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps{
    title:string;
    onPress:()=>void
    
}
export const ButtonComponent = ({title,onPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={style.buttonContiner}>
        <Text style={style.buttoText} onPress={onPress}>{title}</Text>
    </TouchableOpacity>
  )
}
const style=StyleSheet.create({
    buttonContiner:{
        backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    top: '4%',
    marginBottom: 20,
    },buttoText:{
        color: 'black',
        fontSize: 16,
    }
})