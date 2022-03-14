import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Modal, TextInput, AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TaskList from './src/componets/TaskList';
import * as Animatable from 'react-native-animatable';

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {
  const [task, setTask] = useState([]);
  
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  function handleAdd(){
    if (input === '') return;

    const data = {
      key: input,
      task: input
    };

    setTask([...task, data]);
    setOpen(false);
    setInput('');

  }

  const handleDelete = useCallback((data) => {
    const find = task.filter(r => r.key !== data.key);
    setTask(find);
  })

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
    renderItem={ ({ item }) => <TaskList data={item} handleDelete={handleDelete} />}
    
    />

    <Modal animationType="slide" transparent={false} visible={open}>
      <SafeAreaView style={styles.modal}>
        <View style={styles.modalHeader}>
          <TouchableOpacity onPress={ () => setOpen(false)}>
            <Ionicons style={{marginLeft: 5, marginRight: 5 }} name="md-arrow-back" size={40} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Nova tarefa</Text>
        </View>

        <Animatable.View 
        animation='fadeInUp'
        useNativeDriver
        style={styles.modalBody}>
          <TextInput
          multiline={true}
          placeholderTextColor='#747474'
          autoCorrect={false}
          placeholder='Digite a tarefa a fazer.'
          style={styles.inputModal}
          value={input}
          onChangeText={ (texto) => setInput(texto)}
          />
          <TouchableOpacity 
          onPress={handleAdd}
          style={styles.btnModal}>
            <Text style={styles.textBtnModal}>Cadastrar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </SafeAreaView>

    </Modal>

    <AnimatedBtn 
    style={styles.button}
    useNativeDriver
    animation="bounceInUp"
    duration={1500}
    onPress={ () => setOpen(true)}
    >
      <Ionicons name='ios-add' size={35} color='#fff' />
    </AnimatedBtn>
  
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
  modal: {
    flex: 1,
    backgroundColor: '#171d31'
  },
  modalHeader:{
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  modalTitle:{
    marginLeft: 15,
    fontSize: 30,
    color: '#FFF'
  },
  modalBody:{
    marginTop: 15
  },
  inputModal:{
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 25,
    padding: 9,
    height: 115,
    textAlignVertical: 'top',
    backgroundColor: '#FFF',
    color: '#000',
    borderRadius: 5,
    fontSize: 20
  },
  btnModal:{
    backgroundColor: '#0094FF',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5

  },
  textBtnModal:{
    fontSize: 20,
    color: '#FFF'
  },

});
