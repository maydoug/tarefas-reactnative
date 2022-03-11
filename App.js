import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Modal, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TaskList from './src/componets/TaskList';
import * as Animatable from 'react-native-animatable';

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {
  const [task, setTask] = useState([
    {key: 1, task: 'Compra pão' },
    {key: 2, task: 'Compra açucar' },
    {key: 3, task: 'Compra um carro novo' },
    {key: 4, task: 'Votar no lula' },
    {key: 5, task: 'Compra churrasco' },
  ]);
  
  const [open, setOpen] = useState(false);

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

    <Modal animationType="slide" transparent={false} visible={open}>
      <SafeAreaView style={styles.modal}>
        <View style={styles.modalHeader}>
          <TouchableOpacity onPress={ () => setOpen(false)}>
            <Ionicons style={{marginLeft: 5, marginRight: 5 }} name="md-arrow-back" size={40} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Nova tarefa</Text>
        </View>

        <View style={styles.modalBody}>
          <TextInput 
          placeholder='Digite a tarefa a fazer.'
          styles={styles.inputModal}
          />
          <TouchableOpacity style={styles.btnModal}>
            <Text style={styles.textBtnModal}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
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

  },
  inputModal:{

  },
  btnModal:{

  },
  textBtnModal:{

  },

});
