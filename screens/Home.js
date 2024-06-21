import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Keyboard,
} from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/Global'
import Card from '../shared/Card'
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './ReviewForm'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ])

  const addReview = (review) => {
    review.key = Math.random().toString()
    setReviews((currentReviews) => {
      return [review, ...currentReviews]
    })
    setModalOpen(false)
  }

  return (
    <View style={globalStyles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
        <Modal visible={modalOpen} animationType="slide">
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              color="black"
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </Modal>
      </TouchableWithoutFeedback>

      <MaterialIcons
        name="add"
        size={24}
        color="black"
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Reviews', item)}
            >
              <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )
        }}
      />
      {/* <Button title="Reviews" onPress={() => navigation.push('Reviews')} /> */}
    </View>
  )
}
const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
})
