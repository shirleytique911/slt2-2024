import { FlatList, StyleSheet, Text, View } from 'react-native'
import listData from '../data/lists.json'
import { ListItem } from '../components/listItem'
import { useState } from 'react'
export const Lists = () => {
    const [list, setList] = useState(listData)

    const handleDelete = (id) => {
        setList(list.filter((item) => item.id != id))
    }

    return (
    <View style={styles.cart}>
        <FlatList 
            contentContainerStyle={{ gap: 32 }}
            data={list}
            renderItem={({item}) => <ListItem {...item} onDelete={handleDelete}/>}
            ListEmptyComponent={<Text>No hay productos en lista de deseos</Text>}
        />       
    </View>
    )
}

const styles = StyleSheet.create({
    cart: {
        minHeight: '100%',
        backgroundColor: 'white',
        padding: 16,
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    totalText: {
        fontSize: 18,
        fontFamily: 'Unbounded'
    }
})