import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  useEffect } from "react-native";

import { Button } from "../../components/Button";
import { SkillCard } from "../../components/SkillCard";

export function Home(){

  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greetting, setGretting] = useState('');

  function handleAddNewSkill(){
    setMySkills(oldState => [...oldState, newSkill]);
  }


  useEffect(() => {
    const currentHour = new Date().getHours();
    if(currentHour < 12){
      setGretting('Good Morning!');
    }
    else if(currentHour >= 12 && currentHour < 18){
      setGretting('Good Afternoon');
    }
    else{
      setGretting('Good Night');
    }
  }, [mySkills])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Welcome
      </Text>

      <Text style={styles.greettings}>
        { greetting }
      </Text>

      <TextInput 
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} /> 

      <Text style={[styles.title, { marginVertical: 50}]}>
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={ item => item}
        renderItem={({ item }) => (
          <SkillCard skill={item} />
        )}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#fff',
    fontSize: 24
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7
  },
  greettings: {
    color: '#fff'
  }
});