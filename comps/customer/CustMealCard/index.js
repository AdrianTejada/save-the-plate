import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Pressable, TextInput } from 'react-native';
import styled from 'styled-components';
import { Feather, MaterialIcons, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';


const CardCont = styled.View`
  display:flex;
  backgroundColor:white;
  width:90%;
  flexDirection:column;
  borderRadius:15px;
  overflow:hidden;
  height:${props=>props.height};
  margin-top:10px;
`;

const Content = styled.View`
  display:flex;
  width:100%;
  flexDirection:row;
`

const RestCont = styled.View`
  display:flex;
  width:100%;
  flexDirection:row;
  justify-content:space-between;
`;

const PriceCont = styled.View`
  display:flex;
  width:50%;
  flexDirection:row;
  justify-content:space-between;
`;

const DetailsCont = styled.Pressable`
  display:flex;
  width:55%;
  flexDirection:row;
  align-items:center;
`;

const StarsCont = styled.View`
  display:flex;
  width:100%;
  flexDirection:row;
  align-items:center;
  margin-top:10px;
`;

const Left = styled.View`
  display:flex;
  backgroundColor:white;
  margin:15px;
  flexDirection:column;
  flex:1;
`

const Right = styled.View`
  display:flex;
  margin:15px;
  flexDirection:column;
  flex:2;
`

const Plates = styled.View`
  display:flex;
  flexDirection:column;
  width:30px;
  justifyContent:center;
  alignItems:center;
`

const Cart = styled.Pressable`
  display:flex;
  background-color:#FE4265;
  position:absolute;
  bottom:0;
  width:100%;
  z-index:10;
  justify-content:center;
  align-items:center;
  height:30px;
`


const AddToCart = styled.Text`
  color:white;
  font-size:18px;
`

// var mealImg = require('../../assets/meal.png');

const CustMealCard = ({
  src=require("../../../assets/meal.png"),
  plateImg=require("../../../assets/plate.png"),
  restaurant="Fratelli's Bistro", //fix this
  meal="Fettuccine Alfredo",
  distance="400m away",
  plates="217",
  description="fettuccine pasta tossed with Parmesan cheese and butter and served with garlic toast on the side",
  newprice="$5.00",
  oldprice="$21.00",
  height="170px",
  addToCart=()=>{}
}) =>{

  const [card, setCard] = useState(false)

  if(card === false) {
    height="170px"
  } else {
    height="330px"
  }

  const HandleCard = () => {
    setCard(!card)
  }

  return <CardCont height={height}>
    <Cart>
      <AddToCart onPress={addToCart} >+ Add to cart</AddToCart>
    </Cart>
    <Content>
      <Left>
        <Image style={{width:115, height:105, borderRadius:15}} source={src}/>
        <Text style={{marginTop:30, fontSize:16}}>Description:</Text>
        <Text style={{marginTop:30, fontSize:16}}>Restaurant's Rating:</Text>
        <Text style={{marginTop:15, fontSize:16}}>Dietary Information:</Text>
      </Left>
      <Right>
        <Text style={{fontSize:20}}>{meal}</Text>
        <RestCont>
          <Text style={{marginTop:8, fontSize:14}}>{restaurant}</Text>
          <Text style={{marginTop:10, fontSize:12}}>{distance}</Text>
        </RestCont>
        <PriceCont>
          <Text style={{marginTop:8, fontSize:16, color:'#FE4265', fontWeight:'700'}}>{newprice}</Text>
          <Text style={{marginTop:10, fontSize:12, textDecorationLine:'line-through'}}>{oldprice}</Text>
        </PriceCont>
        <DetailsCont onPress={HandleCard}>
          <Pressable onPress={HandleCard}><Text style={{marginTop:5, fontSize:18, fontWeight:'600', color:'#FE4265'}}>More Details</Text></Pressable>
          <MaterialIcons style={{marginTop:5}} name="arrow-drop-down" size={33} color="#FE4265" />
        </DetailsCont>
        
        <Text style={{marginTop:10, fontSize:12}}>{description}</Text>
        <StarsCont>
          <SimpleLineIcons style={{marginRight:7}} name="star" size={24} color="#FE4265" />
          <SimpleLineIcons style={{marginRight:7}} name="star" size={24} color="#FE4265" />
          <SimpleLineIcons style={{marginRight:7}} name="star" size={24} color="#FE4265" />
          <SimpleLineIcons style={{marginRight:7}} name="star" size={24} color="#FE4265" />
          <SimpleLineIcons style={{marginRight:7}} name="star" size={24} color="#FE4265" />
        </StarsCont>
      </Right>
    </Content>
  </CardCont>
}

export default CustMealCard;


