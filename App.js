import React, { useState,useEffect } from 'react';
import { View,ImageBackground, Button,ScrollView,Scrollable,Alert,Modal, StyleSheet ,Text, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';

/***************** Horse Ride ***************************** */
// const array = ['red', 'yellow', 'green', 'purple', 'orange','black','cyan','blue','violet'];
// const ColorChangeExample = () => {
//   const [count, setCount] = useState(0);
//   const left = () => setCount(count - 10);
//   const Right = () => setCount(count + 10);



//   return (
//  <>
 
//  <View style={styles.road}><Text style={[styles.Text,{marginLeft:count}]}>🏇</Text></View>
//  <View style={styles.button}>
//  <Button
//  title="Left"
//  onPress={left}
//  />
//  <Button
//  title="Right"
//  onPress={Right}
//  />
//  </View>
//  </>
//   );
// };

// const styles = StyleSheet.create({
// button:{
//   flex:1,
//   flexDirection:'row',
//   alignItems:'flex-end',
//   justifyContent: 'space-evenly',
// },
// road:{
  
//   borderBottomColor: '#737373',
//   flex:1,
//   // alignItems:'flex-end',
//   borderBottomWidth: 5,
// },
// Text:{
//   flex:1,
//   marginTop:345,
//   fontSize:50,
//   position:'absolute',
// // marginLeft:200
// }

// });







/* ********Day 2 Task******** */


// const ColorChangeExample=()=>{
//   const [red,setred]=useState(0);
//   const [green,setgreen]=useState(0);
//   const [blue,setblue]=useState(0);
//  var x,y,a,b,c,d;
// const Rleft=()=>{
 
//   setred(x=>x-10 );

// }
// const Rright=()=>{

//   setred(y=>y+10);
// }
// const Gleft=()=>{
//   setgreen(a=>a-10);
// }
// const Gright=()=>{
//   setgreen(c=>c+10);
// }
// const Bleft=()=>{
//   setblue(b=>b-10);
// }
// const Bright=()=>{
//   setblue(d=>d+10);
// }
//   return(
//  <>
//   <View style={[styles.box,{ backgroundColor:`rgb(${red},${green},${blue})`}]}>
// <TouchableOpacity></TouchableOpacity>
// </View>
// <Text style={styles.txt}>RGB(${red},${green},${blue})</Text>
// <Text></Text>
// <View style={styles.first}>
// <View style={styles.but}>
// <Button title="-"
//   onPress={Rleft}>
// </Button><Text>  Red  </Text>
// <Button title="+"  onPress={Rright}></Button>
// </View>

// <View style={styles.but}>
// <Button title="-"
//  onPress={Gleft}></Button><Text> Green </Text>
// <Button title="+"  onPress={Gright}></Button>
// </View>

// <View style={styles.but}>
// <Button title="-"
//  onPress={Bleft}></Button><Text>  Blue   </Text>
// <Button title="+"  onPress={Bright}></Button>
// </View>

// </View>
// </>

//   );
// };
// const styles=StyleSheet.create({
//   box:{
//     flex:1,
//   // backgroundColor:'red',
//     marginHorizontal:60,

//     marginTop:100,
//     marginBottom:500,
    
 

    
//   },
//   but:{
   
//     padding:20,
//     flex:1,
//     flexDirection:'row',
//   },
//   first:{
    
//     position:'absolute',
//     flex:1,
//  alignItems:'center',
//     flexDirection:'column',
//     justifyContent:'space-evenly',
//   marginTop:500,
 
//   marginLeft:125,
   
   
//   },
//   txt:{
//     position:'absolute',
//     marginTop:350,
// marginLeft:140
//     // alignItems:'baseline'
//   }
 

// })



/***********Day 3 Task*************/

// const ColorChangeExample = () => {
//   const [modalVisible, setModalVisible] = useState(false);

//   const [inputText,setInputText]=useState('');
//   // const [isInputGiven,setIsInputGiven]=useState(false);
//   const [items,setItems]=useState([])

//   const value="No Tasks assigned";

//   const [content,setContent]=useState(value);

//   const handleInputChange=(text)=>{

// setInputText(text.nativeEvent.text);
    
    

// // setIsInputGiven(text!=='')
//   }

//   const addTask=()=>{
//     {inputText &&
//     setItems([...items,inputText]);
//     setContent('')
//     setInputText('');}
//     setModalVisible(false)
//   }
//   const arr=[...items];
 
//   const taskDelete=(index)=>{
   
// arr.splice(index,1)
// setItems(arr)
// if(arr.length<1){
// setContent(value);}
//   }


//   return(
    
//     <>
//     <ImageBackground  style={{  flex: 1,
//    }}source={{uri:'https://plus.unsplash.com/premium_photo-1672944876342-4090164e1c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFwZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60'}}>
//     <View style={styles.container}>
//     <View style={styles.task}>
   

//       <Modal
//       visible={modalVisible}
 
//       animationType='fade'
//       >
//       <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//          <TextInput
//       placeholder=' Enter the task to be added'
//     style={styles.input}
//     value={inputText}
//     onChange={handleInputChange}
//       ></TextInput>
//             <View style={styles.but}>
//             <Button title="SAVE" onPress={addTask}></Button>
//             <Button title='CANCEL' onPress={()=>{setModalVisible(false)}}></Button></View>
//             </View>
//             </View>  
//       </Modal>

//      <Text style={{fontSize: 24,fontWeight:'bold',bottom:50}}>Todo List</Text>
//     <Button  
//     title="Add Task"
//     // onPress={addTask}
//     onPress={()=>setModalVisible(!modalVisible)}

//     ></Button>
//      </View>
//      </View>   

  
//     <ScrollView style={styles.scrollContainer}>
//     <Text style={styles.null}>📝{content}</Text>
//     <View style={styles.list}>
//       {items.map((item,index)=>(<View style={styles.item} key={index}>
//         <Text style={{ fontSize: 20,lineHeight:50}} >{'  '}{item}</Text>
//         <View style={styles.delete}>
//           <Button onPress={()=>taskDelete(index)} title="Delete" style={styles.butback}></Button>
//           </View>
//           </View>))}
//       </View>
 

//     </ScrollView>


//     </ImageBackground>

//    </>
//   );


// };
// const styles=StyleSheet.create({
//   container:{
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//    centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {

//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems:'stretch',
//     elevation: 10,
//      },
//   but:{

// flexDirection:'row',
// justifyContent:'space-evenly'

//   },
//   task:{
// // flex:1,
// alignItems:'center',
// justifyContent:"center",
// // position:'relative'
//   },
//   input:{
//     margin:10,
//     borderWidth:1,
//     height:40,
//     width:175
//   },
// item:{
 
//   borderWidth:0,
//   borderRadius:5,
//   marginBottom:30,
//   width:300,
//   height:"auto",

//   backgroundColor: 'lightgray',
//   justifyContent:'space-between'


// },
// list:{
//   alignItems:'center',


// },
// scrollContainer: {
//   top:0,
//   flex: 1,
//   width: '100%',

// },
// delete:{
// bottom:3,
// width:295,
// left:2,

// },

// null:{
//   fontSize: 24,
//   fontWeight: 'bold',
// textAlign:'center',

// }


// })

// In App.js in a new project

// import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function First({ navigation }) {
  const [number, onChangeText] = React.useState('');
  return (
    <>
   < View style={{alignItems:'center',}}>
    {/* <Text >First screen</Text> */}
    </View>
    <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
    <TextInput
        style={{borderWidth:1,padding:10,width:200,marginBottom:20}}
        onChangeText={onChangeText}
        placeholder=' Enter username'
        value={number}
      />
    
      <Button 
        title="Sign In"
        disabled={number.trim() === ''}
        onPress={() => navigation.navigate('Page1',{value:number})}
      />
    
    </View>
    </>
  );
}

function Second({ route }) {

  const [modalVisible, setModalVisible] = useState(false);

  const [inputText,setInputText]=useState('');
 
  const [items,setItems]=useState([])

  const values="No Tasks assigned";

  const [content,setContent]=useState(values);

  const {value}= route.params;

  const handleInputChange=(text)=>{

setInputText(text.nativeEvent.text);
    
    

  }

  const addTask=()=>{
    {inputText &&
    setItems([...items,inputText]);
    setContent('')
    setInputText('');}
    setModalVisible(false)
  }
  const arr=[...items];
 
  const taskDelete=(index)=>{
   
arr.splice(index,1)
setItems(arr)
if(arr.length<1){
setContent(values);}
  }

  useEffect(() => {
    // Show an alert when the component mounts
    Alert.alert('❤💛💙', `Welcome: ${value}`);
  }, []);
  return(
    
    <>
        <ImageBackground  style={{  flex: 1,
   }}source={{uri:'https://plus.unsplash.com/premium_photo-1672944876342-4090164e1c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFwZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60'}}>
    <View style={styles.container}>
    <View style={styles.task}>
   

      <Modal
      visible={modalVisible}
 
      animationType='fade'
      >
      <View style={styles.centeredView}>
          <View style={styles.modalView}>
         <TextInput
      placeholder=' Enter the task to be added'
    style={styles.input}
    value={inputText}
    onChange={handleInputChange}
      ></TextInput>
            <View style={styles.but}>
            <Button title="SAVE" onPress={addTask}></Button>
            <Button title='CANCEL' onPress={()=>{setModalVisible(false)}}></Button></View>
            </View>
            </View>  
      </Modal>

     <Text style={{fontSize: 24,fontWeight:'bold',bottom:50}}>{value}'s Todo List</Text>
    <Button  
    title="Add Task"
    // onPress={addTask}
    onPress={()=>setModalVisible(!modalVisible)}

    ></Button>
     </View>
     </View>   

  
    <ScrollView style={styles.scrollContainer}>
    <Text style={styles.null}>📝{content}</Text>
    <View style={styles.list}>
      {items.map((item,index)=>(<View style={styles.item} key={index}>
        <Text style={{ fontSize: 20,lineHeight:50}} >{'  '}{item}</Text>
        <View style={styles.delete}>
          <Button onPress={()=>taskDelete(index)} title="Delete" style={styles.butback}></Button>
          </View>
          </View>))}
      </View>
 

    </ScrollView>


    </ImageBackground>

   </>
  );
}
const styles=StyleSheet.create({
 
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
   centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {

    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems:'stretch',
    elevation: 10,
     },
  but:{

flexDirection:'row',
justifyContent:'space-evenly'

  },
  task:{
// flex:1,
alignItems:'center',
justifyContent:"center",
// position:'relative'
  },
  input:{
    margin:10,
    borderWidth:1,
    height:40,
    width:175
  },
item:{
 
  borderWidth:0,
  borderRadius:5,
  marginBottom:30,
  width:300,
  height:"auto",

  backgroundColor: 'lightgray',
  justifyContent:'space-between'


},
list:{
  alignItems:'center',


},
scrollContainer: {
  top:0,
  flex: 1,
  width: '100%',

},
delete:{
bottom:3,
width:295,
left:2,

},

null:{
  fontSize: 24,
  fontWeight: 'bold',
textAlign:'center',

}


})



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={First} />
        <Stack.Screen name="Page1" component={Second} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// export default ColorChangeExample;
