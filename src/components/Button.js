import React from 'react';
import { TouchableOpacity,
      Text,
      StyleSheet
} from 'react-native';

export function Button({ onPress }){
      return (
            <TouchableOpacity
            style={styles.buttom}
            activeOpacity={.3}
            onPress={onPress}
            >
                  <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
      )
}

const styles = StyleSheet.create({
      buttom: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
      },
      buttomText: {
        color: '#FFF',
        fontSize: 17
      }
});