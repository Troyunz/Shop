import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const COLORS = {primary: '#f2f2e1', white: '#eaeaea', red: '#de9595'};
const FRUITS = {0: 'Milk', 1:'Coffee', 2: 'Oranges', 3:'Bread'};

export default function App() {

  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState("");


  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item ? item.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase()
        console.log(itemData.indexOf(textData) > -1)
        return itemData.indexOf(textData) > -1
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(masterData);
      setSearch(text);
    }
  }

  const randomGen = () => { 
    var num = Math.floor(Math.random() * (3));
    return FRUITS[num]
  }

  const addItem = (text) => {
    var newArray = [...filteredData , text];
    setFilteredData(newArray);
    setMasterData(newArray);
  }

  const itemView = ({item}) => {
    return (
    <Text style={styles.itemStyle}>{item}</Text>
    )
  }

  const itemSeparator = () => {
    return (
      <View style={{height: 0.5, width: '90%', backgroundColor: '#c8c8c8'}}/>
    )
  }

  return (
      <View style={styles.container}>
       <View style={{flexDirection: 'row', marginHorizontal: 20}}>
          <TextInput
            style={styles.textInputStyle}
            value={search}
            placeholder="Search Here"
            onChangeText={(text) => searchFilter(text)}
          />
          <TouchableOpacity onPress={() => addItem(randomGen())}>
              <View style={styles.addIcon}>
                  <Ionicons name='md-add' size={30} 
                  style={{color: COLORS.red, padding: 10}}/>
              </View>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{paddingLeft: 9}}
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={itemSeparator}
          renderItem={itemView}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
  },

  itemStyle: {
    fontSize: 24,
    padding: 15
  },

  textInputStyle: {
    borderWidth: 1, 
    borderColor: COLORS.primary, 
    backgroundColor: COLORS.white, 
    height: 50, 
    borderRadius: 10,
    flex: 1, 
    padding: 5
  },
  addIcon: {
    height: 50, 
    borderRadius: 10,
    marginLeft: 5,
    backgroundColor: COLORS.white,
    alignItems: 'center', 
    justifyContent: 'center'
},
});
