import React, { useState }from 'react';
import { StyleSheet, Text, View, Image, Button, Pressable, TextInput, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  useFonts,
  Raleway_700Bold,
} from '@expo-google-fonts/raleway';
import {
  Quicksand_300, Quicksand_300Light
} from '@expo-google-fonts/quicksand';

import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import PlatesSaved from '../../comps/customer/PlatesSaved';
import InfoCard from '../../comps/customer/InfoCard';
import But from '../../comps/global/Button';

const TopCont = styled.Pressable`
  display:flex;
  flex-direction:row;
  width:90%;
  justify-content:flex-start;
  align-items:center;
  position:absolute;
  top:80px;
`

const IconCont = styled.Pressable`
  display:flex;
  border-radius:100px;
  border:2px solid #ffffff;
  width:100px;
  height:100px;
  justify-content:center;
  align-items:center;
`

const Cards = styled.View`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  position:absolute;
  top:190px;
  width:100%;
`

const EditMenuCont = styled.View`
  width: 90%;
  height: 387px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 15px;
  margin-top: 10px;
  padding-right:20px;
  padding-left:20px;
  padding-top:10px;
  overflow: hidden;
`;

const AddItemButton = styled.View`
    width: 130%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0px;
`

const SingleLineInput = styled.View`
  width: 67%;
  height: 40px;
  border-radius:15px;
  border: 1px solid #FE4265;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px
`;

const DescriptionCont = styled.View`
  width: 67%;
  height: 100px;
  border-radius:15px;
  border: 1px solid #FE4265;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
`

const AddItemModal = styled.View`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 width: 100%;
 height: 679px;
 padding-right: 5%;
 padding-left: 5%;
 padding-top: 40px;
 padding-bottom: 37px;
 background-color: #ffffff;
 border-radius: 30px;
 position: absolute;
 bottom: 0px;
`

const CloseModal = styled.TouchableOpacity`
  position: absolute;
  top:10px;
  right: 10px;
  width: 13px;
  height: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;

const TextCont = styled.View`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  position: relative;
  top: 10px;
`

const ModalRow = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

const ButtonCont = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

const ImageButtons = styled.View `
  width: 67%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: flex-start;
`


export default function Menu({
  restaurant="Fratelli's Bistro",
  navigation
}) {

  const [modalVisible, setModalVisible] = useState(false);



  return (
    <LinearGradient colors={['#F3AE81', '#E94168']} style={styles.container}>

      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      >
      
      <AddItemModal>
        <CloseModal onPress={()=>setModalVisible(!modalVisible)}>
          <AntDesign name="close" size={13} color="#C4C4C4" />
        </CloseModal>
        
        {/* image row */}
        <ModalRow>
        <TextCont>
        <Text style={{fontWeight: 'bold'}}>Image:</Text>
          </TextCont>

          <ImageButtons>
            <Image style={{width:206, height:122, borderRadius:10}} source={require('../../assets/meal.png')}></Image>
            <ButtonCont>
              
            </ButtonCont>
          </ImageButtons>
        </ModalRow>

        {/* Name row */}
        <ModalRow>
          <TextCont>
            <Text style={{fontWeight: 'bold'}}>Name:</Text>
          </TextCont>

          <SingleLineInput>
            <TextInput placeholder="Name" placeholderTextColor="#aaaaaa"></TextInput>
          </SingleLineInput>
        </ModalRow>

        {/* Description */}
        <ModalRow>
          <TextCont>
            <Text style={{fontWeight: 'bold'}}>Description:</Text>
          </TextCont>

        <DescriptionCont>
          <TextInput placeholder="Description" placeholderTextColor="#aaaaaa"></TextInput>
        </DescriptionCont>
        </ModalRow>

        {/* price row */}
        <ModalRow>
          <TextCont>
            <Text style={{fontWeight: 'bold'}}>Price:</Text>
          </TextCont>

          <SingleLineInput>
            <TextInput placeholder="Price" placeholderTextColor="#aaaaaa"></TextInput>
          </SingleLineInput>
        </ModalRow>

        <ButtonCont>
          <But width="45%" text="Add Item"/>
          <But width="45%" text="Cancel" bgColor="#F3AD81" onPress={()=>setModalVisible(!modalVisible)}/>
        </ButtonCont>
 
      </AddItemModal>
      </Modal>


      <TopCont>
        <IconCont >
          <MaterialCommunityIcons name="account" size={60} color="#ffffff" />
        </IconCont>
      <Text style={{fontSize:30, fontWeight:'400', color:'#ffffff', marginLeft:20}}>{restaurant}</Text>
      </TopCont>

      <Cards>
        <EditMenuCont>
        <Text style={{color: "#FE4265", fontSize: 18, fontWeight: 'bold', alignSelf: 'flex-start'}} >Menu</Text>

        <View style={{width: '100%'}}>
            <ScrollView contentContainerStyle={{width: '100%', alignItems:'center', paddingBottom: 70}}>
                <But width="100%" height="50px" text="Fettucini Alfredo" margintop="10px"/>
                <But width="100%" height="50px" text="Spaghetti Bolognese" margintop="10px"/>
                <But width="100%" height="50px" text="Lasagna" margintop="10px"/>
                <But width="100%" height="50px" text="Meatballs" margintop="10px"/>
                <But width="100%" height="50px" text="Ravioli" margintop="10px"/>
                <But width="100%" height="50px" text="Roasted Vegetables" margintop="10px"/>
                <But width="100%" height="50px" text="Gnochi" margintop="10px"/>
            </ScrollView>
        </View>
        <AddItemButton>
            <But width="100%" height="40px" text="New Item" bgColor="#F3Ad81" borderRadius="0px" onPress={()=>setModalVisible(!modalVisible)}/>
        </AddItemButton>
        </EditMenuCont>

        <But text="Save Changes" margintop="10px" bgColor="#F3AD81"/>
        <But text="< Back" margintop="10px" txtColor="#FE4265" bgColor="#ffffff" onPress={()=>navigation.goBack()}/>
      </Cards>
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor:'#F3AE81',
    width:200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
    padding:5,
    borderRadius:20,
  },
  whiteButton: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor:'#ffffff',
    width:200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
    padding:5,
    borderRadius:20,
  },
  username: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor:'#FFF',
    width:200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
    padding:5,
    borderRadius:20,
    fontFamily:'Quicksand_300Light', 
    fontSize:16
  }
});