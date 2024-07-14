import { FlatList, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { ListItem } from '../components/listItem'
import { useSelector } from 'react-redux'
import { useGetProductsByWishlistQuery, useDeleteProductFromWishlistMutation } from '../services/shopService'
import { BREAKPOINTS } from '../utils/breakpoint'
export const Lists = () => {
    const userData = useSelector(state => state.auth.value.user)
    const localId = userData.localId
    const { data: list, refetch } = useGetProductsByWishlistQuery(localId);
    const [triggerDelete] = useDeleteProductFromWishlistMutation();
    const { width } = useWindowDimensions()
    const styles = createStyles(width)

    const handleDelete = async productId => {
        await triggerDelete({localId, productId})
        refetch()
    };


    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList 
                    contentContainerStyle={{ gap: 32 }}
                    data={list}
                    key={item => item.id}
                    renderItem={({item}) => <ListItem {...item} onDelete={() => handleDelete(item.id)}/>}
                    ListEmptyComponent={<Text style={styles.emptyText}>No hay productos..</Text>}
                />       
            </View>
        </View>
    )
}

const createStyles = deviceWidth => StyleSheet.create({
    container: {
        paddingHorizontal: deviceWidth >= BREAKPOINTS.MEDIUM ? '30%' : 16,
    },
    list: {
        minHeight: '100%',
        padding: 16,
    },
    emptyText:{
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: deviceWidth >= BREAKPOINTS.MEDIUM ? 18 : 16,
    },
})