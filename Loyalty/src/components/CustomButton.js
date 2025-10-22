import { Touchable, TouchableOpacity, StyleSheet ,Text} from 'react-native'

import colors from '../theme/colors'
import fonts from '../theme/fonts'

function Button(props)
{
    return(
    <TouchableOpacity style={styles.container}> 
        <Text style={styles.fonts}>{props.name}</Text>
    </TouchableOpacity>
    )
}

export default function CustomButton({name})
{
    return(
       <Button name={name} />
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        width:'25%',
        height:35,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        margin:5
    },
    fonts:{
        fontSize:fonts.size.medium,
        fontWeight:fonts.bold,
        color:colors.secondary
    }
});