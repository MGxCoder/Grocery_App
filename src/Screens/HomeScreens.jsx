import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import Allitems from './Allitems'
import CreatesScreens from './CreatesScreens'


const data=[ 
  {id:1, name:"wheat", stock:5 , unit : 'kg'},
  {
    id:2, name:"rice", stock:10 , unit : 'kg'},
  {
    id:3, name:"sugar", stock:2 , unit : 'kg'}, 
    {id:4, name:"salt", stock:15 , unit : 'kg'},
    {id:5, name:"oil", stock:8 , unit : 'liters'},
    {id:6, name:"butter", stock:3 , unit : 'kg'},
]


const HomeScreens = () => {
  const [view, setview] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.btncontainer}>
        <Pressable style={[styles.btn , view ===0 ? {backgroundColor:"#3ac883ff"} : null]} onPress={() => setview(0)}>
          <Text style={styles.btnText}>All Items</Text>
        </Pressable>  

        <Pressable style={[styles.btn , view ===1 ? {backgroundColor:"#3ac883ff"} : null]} onPress={() => setview(1)}>
          <Text style={styles.btnText}>Low Stock</Text>
        </Pressable>

        <Pressable style={[styles.btn , view ===2 ? { backgroundColor:"#3ac883ff"} : null]} onPress={() => setview(2)}>
          <Text style={styles.btnText}>Create</Text>
        </Pressable>
      </View>

      {view === 0 && <Allitems data={data}/>}
      {view === 1 && <Allitems  data={data.filter((items=> items.stock<=5))}/>}  {/* Can be filtered for Low Stock */}
      {view === 2 && <CreatesScreens  data={data}/>}
    </View>
  )
}

export default HomeScreens

const styles = StyleSheet.create({
  container:{
    marginTop:'10%',
    padding: '4%',
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:20
  },
  btncontainer:{
    flexDirection:'row',
    gap:10,
    marginVertical:10,
  },
  btn:{
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:50,
    borderWidth:1,
    borderColor:'#23f131',
  },
  btnText:{
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center', 
    color:'#000'
  }
})
