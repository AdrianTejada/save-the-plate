// Adrian's's section - restaurant UI
import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text, Modal, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import {
  Raleway_700Bold,
} from '@expo-google-fonts/raleway';
import {
  Quicksand_300, Quicksand_300Light, Quicksand_400Regular
} from '@expo-google-fonts/quicksand';
import { useFonts } from 'expo-font';

import AddedItem from "../../comps/customer/AddedItem";

import ListingCard from '../../comps/Restaurant/ListingCard'
import OrderCard from '../../comps/Restaurant/OrderCard'
import AddedItemOverlay from "../../comps/customer/AddedItemOverlay";

import Tabs from '../../comps/global/Tabs'

import Search from "../../comps/Restaurant/SearchBar";

import BubbleRest from "../../comps/Restaurant/BubbleRest";
import axios from 'axios';
import { auth, storage } from "../../firebase";
import { height } from "dom-helpers";



export default function RestaurantHome ({  navigation }) {

  const [listedData, setListedData] = useState(null);
  const [ordersData, setOrdersData] = useState(null);
  const [oid, setOid] = useState();
  const [status, setStatus] = useState("complete");

  const [refreshOrders, setRefreshOrders] = useState(1)
  const [refreshListings, setRefreshListings] = useState(1)
  
  var userID = auth.currentUser?.uid;
  //console.log(userID)

  // GET ORDERS ==========================================
  useEffect(() => {

    let isUnmount = false;
    
    (async () => {
      setOrdersData(null)

      const orderResult = await axios.get('/orders.php?fuid='+userID);
      if(!isUnmount){
        for (var i = 0; i<orderResult.data.length; i++) {
          try{
            // console.log("getting")
            const url = await storage.ref().child(`menu/item${orderResult.data[i].m_id}.jpg`).getDownloadURL();
            orderResult.data[i].url = url
            // console.log(url, "URL");

           }catch (e){
            orderResult.data[i].url = null;
            continue;
          }
        }
        setOrdersData(orderResult.data)
      }
    
    })();

    return () => {
      isUnmount = true;
    }

  }, [refreshOrders]);


  // GET LISTED ============================================
  useEffect(() => {

    let isUnmount = false;
    
    (async () => {
      setListedData(null)

      const result = await axios.get('/listed.php');
      if(!isUnmount){

        for (var i = 0; i<result.data.length; i++) {
          try{
            // console.log("getting")
            const url = await storage.ref().child(`menu/item${result.data[i].m_id}.jpg`).getDownloadURL();
            result.data[i].url = url
            // console.log(url, "URL");

           }catch (e){
            result.data[i].url = null;
            continue;
          }
        }


        // console.log(orderResult.data)
        setListedData(result.data);
        //console.log(orderResult.data)
      }
    
    })();

    return () => {
      isUnmount = true;
    }

  }, [refreshListings]);




  const ConfirmPickup = async () =>{
    const patch = await axios.patch('/orders.php', {
      id:oid,
      status:status
    })}


  const [mealtab, setMealTab] = useState(true)
  const [maptab, setMapTab] = useState(false)

  const HandleMealTab = () => {
    if(mealtab === false){
      setMealTab(true)
      setMapTab(false)
    } 
  }

  const HandleMapTab = () => {
    if(maptab === false){
      setMapTab(true)
      setMealTab(false)
    } 
  }

    // !--------- Tutorial ----------!
    const [card, setCard] = useState(0)
    const [bubble, setBubble] = useState(true)
    const [heading, setHeading] = useState("Here's your Home page. \n Let's break it down!")
    const [subheading, setSubheading] = useState("")
    const [img, setImg] = useState("../../../assets/meal.png")
    const [back, setBack] = useState("< Back")
    const [next, setNext] = useState("Next >")
    const [visibility, setVisibility] = useState(false)
  
    const HandleBubbleNext = () => {
      if(card === 0){
        setCard(1)
        setVisibility(true)
        setHeading("The 'Orders' tab allows you to see the orders that will be picked up by a customer")
        setSubheading("The 'Listed' tab allows you to see the meals that you have listed for pickup by customers")
      }
      if(card === 1){
        setCard(2)
        setHeading("This icon will lead you back \n to the Home page")
        setSubheading("This icon will lead you \n to your profile")
      }
      if(card === 2){
        setCard(3)
        setHeading("When a customer comes to your restaurant to pickup \n their order, press the button 'More details'")
        setSubheading("Then, press the button to 'Confirm pick-up'")
      }
      if(card === 3){
        setCard(4)
        setHeading("")
        setSubheading("This icon will open the \n 'Add an item' window, to list \n a meal in your 'Listed' tab")
      }
      if(card === 4){
        setCard(5)
        setHeading("")
        setSubheading("Then, you will be able to \n add all the details to the \n item you are listing.")
        setNext("Done")
      }
      if(card === 5){
        setCard(0)
        setVisibility(false)
        setHeading("Here's your Home page. \n Let's break it down!")
        setSubheading("")
        setBubble(false)
        setNext("Next >")
      }
    }
    const HandleBubbleBack = () => {
      if(card === 1){
        setCard(0)
        setVisibility(false)
        setHeading("Here's your Home page. \n Let's break it down!")
        setSubheading("")
      }
      if(card === 2){
        setCard(1)
        setHeading("The 'Orders' tab allows you to see the orders that will be picked up by a customer")
        setSubheading("The 'Listed' tab allows you to see the meals that you have listed for pickup by customers")
      }
      if(card === 3){
        setCard(2)
        setHeading("This icon will lead you back \n to the Home page")
        setSubheading("This icon will lead you \n to your profile")
      }
      if(card === 4){
        setCard(3)
        setHeading("When a customer comes to your restaurant to pickup \n their order, press the button 'More details'")
        setSubheading("Then, press the button to 'Confirm pick-up'")
      }
      if(card === 5){
        setCard(4)
        setHeading("")
        setSubheading("This icon will open the \n 'Add an item' window, to list \n a meal in your 'Listed' tab")
        setNext("Next >")
      }
    }
    // NEED TO INCLUDE FOLLOWING LINE FOR TUTORIAL RESTAURANT
    // <BubbleRest show={bubble} heading={heading} subheading={subheading} img={img} back={back} next={next} onPress1={HandleBubbleNext} onPress2={HandleBubbleBack} opacity={visibility}/>
  
    // !--------- End Of Tutorial ----------!
    const [modalVisible, setModalVisible] = useState(false);

    return (
      <LinearGradient colors={['#F3AE81', '#E94168']} style={styles.container}>
        
        <View style={{width:'100%', position:'absolute', top:80, display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Tabs onPressMeal={HandleMealTab} onPressMap={HandleMapTab}
          fontWeightMeals={mealtab ? 400 : 200}
          fontWeightMap={maptab ? 400 : 200}
          alignItems={mealtab ? 'flex-start' : 'flex-end'}
          />
      </View>

      {mealtab === true && <View style={{marginHorizontal: 0,
            width:'100%',
            position:'absolute',
            top:130,
            bottom:0,
            flex:1}}>
        <Pressable style={{backgroundColor:"#FE4265", justifyContent: "center", alignItems:"center", height: 50, top:-11}}
          onPress={()=>setRefreshOrders(refreshOrders+1)}>
            <Text style={{color:"white"}}>
              Refresh
            </Text>
        </Pressable>
        <ScrollView contentContainerStyle={{width:'100%', alignItems:'center', paddingBottom:105}}>
          {ordersData ? ordersData.filter((x)=> {return x.ostatus === 'active'}).map((order)=>(
            <OrderCard 
              key={order.oid}
              ordernum={order.oid}
              ordername={order.m_name} 
              timer={order.time_avail}
              phonenum={order.phone} 
              name={order.m_name} 
              img={order.url}
              ConfirmPickup={ async()=>{
                setModalVisible(true)
                const patch = await axios.patch('/orders.php', {
                  id:order.oid,
                  status:status
                }) 
              }}
            />
          )) : <Text>No current orders</Text>}
      
        </ScrollView>
        </View>}
      
        {mealtab === false && <View style={{marginHorizontal: 0,
            width:"100%",
            position:'absolute',
            top:130,
            bottom:0,
            flex:1}}>
        <Pressable style={{backgroundColor:"#FE4265", justifyContent: "center", alignItems:"center", height: 50, top:-11}}
          onPress={()=>setRefreshListings(refreshListings+1)}>
            <Text style={{color:"white"}}>
              Refresh
            </Text>
        </Pressable>

        <ScrollView contentContainerStyle={{width:'100%', alignItems:'center', paddingBottom:105}}>

          {listedData ? listedData.filter((x)=> {return x.status === 'active' && x.fuid == auth.currentUser.uid}).map((listed)=>(
            <ListingCard
              key={listed.lid}
              foodname={listed.m_name}
              timer={listed.time_avail}
              modifications={listed.modifications}
              img={listed.url}
            />
          )): <Text>No current listings!</Text>}
        </ScrollView>
        </View>}
        
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={{display:'flex', width:'90%', justifyContent:'flex-start', alignItems:'flex-end', position:'absolute', top:10}}>
                <Pressable onPress={()=>
                  setModalVisible(false)
                  }>
                  <AntDesign name="close" size={24} color="black" />
                </Pressable> 
              </View>
            <View style={{display:'flex', flexDirection:'column', width:'90%', justifyContent:'center', alignItems:'center', marginTop:-10}}>
              <Pressable style={styles.shadowPropDark} title="Close" onPress={()=>{
                setModalVisible(false)
                navigation.navigate('RestaurantHome')
              }} >
                <Text style={{color:'white', fontSize:18}}>Ok</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
          
    </LinearGradient>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center' 
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      zIndex:2,
      backgroundColor:'rgba(0,0,0,0.25)'
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 0,
      alignItems: "center",
      justifyContent:'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width:250,
      height:100
    },
    shadowPropDark: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
      backgroundColor:'#FE4265',
      width:150,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:20,
      padding:5,
      borderRadius:20,
    },
  });