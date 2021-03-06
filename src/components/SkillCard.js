import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet  
} from 'react-native';

export function SkillCard({ skill }){
    return (
        <TouchableOpacity style={styles.buttomSkill}>
          <Text style={styles.textSkill}>
            {skill}
          </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttomSkill: {
      backgroundColor: '#1F1E25',
      padding: 15,
      borderRadius: 20,
      alignItems: 'center',
      marginVertical: 10
    },
    textSkill: {
      color: '#FFF',
      fontSize: 22,
    }
  });