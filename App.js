import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TaskList from './src/componets/TaskList';

export default function App() {
  const [task, setTask] = useState([
    {key: 1, task: 'Compra pão' },
    {key: 2, task: 'Compra açucar' },
    {key: 3, task: 'Compra um carro novo' },
    {key: 4, task: 'Votar no lula' },
    {key: 5, task: 'Compra churrasco' },
  ]);

  return (
    
  <SafeAreaView style={styles.container}>
  <StatusBar backgroundColor="#171d31" barStyle="light-content"/>

    <View style={styles.content}>
    <Text style={styles.title}> Minhas tarefas</Text>
    </View>

    <FlatList
    marginHorizontal={10}
    showsHorizontalScrollIndicator={false} 
    data={task}
    keyExtractor={ (item) => String(item.key) }
    renderItem={ ({ item }) => <TaskList data={item} />}

    />

    <TouchableOpacity style={styles.button}>
      <Ionicons name='ios-add' size={35} color='#fff' ></Ionicons>
    </TouchableOpacity>
  
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171d31'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 15,
    paddingBottom: 10,
    color: '#fff'
  },
  content: {

  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#0094FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 9,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    }

  },

});
