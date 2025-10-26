import { TouchableOpacity, StyleSheet ,Text} from 'react-native'

import colors from '../theme/colors'
import fonts from '../theme/fonts'


export default function CustomButton(props)
{
    return(
            <TouchableOpacity style={styles.container} onPress={props.func}> 
                <Text style={styles.fonts}>{props.name}</Text>
            </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        width:'35%',
        height:35,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        margin:5
    },
    fonts:{
        fontSize:fonts.size.medium,
        fontWeight:fonts.bold,
        color:colors.textColor
    }
});