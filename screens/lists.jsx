import { FlatList, StyleSheet, Text, View } from 'react-native'
import listData from '../data/lists.json'
import { ListItem } from '../components/listItem'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetProductsByWishlistQuery, useDeleteProductFromWishlistMutation } from '../services/shopService'
export const Lists = () => {
    const userData = useSelector(state => state.auth.value.user)
    const localId = userData.localId
    const { data: list, error, isLoading,refetch } = useGetProductsByWishlistQuery(localId);
    const [triggerDelete, result] = useDeleteProductFromWishlistMutation();

    const handleDelete = async productId => {
        await triggerDelete({localId, productId})
        refetch()
    };


    return (
        <View style={styles.list}>
            <FlatList 
                contentContainerStyle={{ gap: 32 }}
                data={list}
                key={item => item.id}
                renderItem={({item}) => <ListItem {...item} onDelete={() => handleDelete(item.id)}/>}
                ListEmptyComponent={<Text>No hay productos en lista de deseos</Text>}
            />       
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        minHeight: '100%',
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