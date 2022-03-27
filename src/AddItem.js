import React from 'react'
import { StyleSheet } from 'react-native'

const FRUITS = {0: 'Milk', 1:'Coffee', 2: 'Oranges', 3:'Bread'};


function AddItem() {


    const addItem = () => {
        
    }

    const randomGen = () => { 
        var num = Math.floor(Math.random() * (3));
        return FRUITS[num]
    }

  return (
    <View style={{flexDirection: 'row', marginHorizontal: 20}}>
          <TextInput
            style={styles.textInputStyle}
            value={search}
            placeholder="Search Here"
            onChange={(text) => searchFilter(text)}
          />
          <TouchableOpacity onPress={() => addItem(randomGen())}>
              <View style={styles.addIcon}>
                  <Ionicons name='md-add' size={30} 
                  style={{color: COLORS.red, padding: 10}}/>
              </View>
          </TouchableOpacity>
    </View>
  )
}

export default AddItem

const styles = StyleSheet.create({
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingHorizontal: 20,
        marginTop: 5,
        backgroundColor: 'white'
    },
    addIcon: {
        height: 50, 
        borderRadius: 10,
        marginLeft: 5,
        backgroundColor: COLORS.white,
        alignItems: 'center', 
        justifyContent: 'center'
    },
})