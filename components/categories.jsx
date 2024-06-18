import { StyleSheet,FlatList,View, Text, ActivityIndicator, useWindowDimensions } from "react-native";
import { CategoryItem } from "./categoryItem";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";
import { useGetCategoriesQuery } from "../services/shopService";
import { BREAKPOINTS } from '../utils/breakpoint';

export const Categories = () => {
    const { navigate } = useNavigation()
    const { data, isLoading, error } = useGetCategoriesQuery()
    const dispatch = useDispatch()
    const { width } = useWindowDimensions()
    const styles = createStyles(width)

    const handlePress = categorybook => {
        dispatch(setCategorySelected(categorybook))
        navigate('ItemListCategories');
    };

    return (
        <View style={styles.categories}>
            <Text style={styles.text}>Géneros Literarios</Text>
            {
                isLoading ? (
                    <View style={styles.categoriesLoading}>
                        <ActivityIndicator size="small" color="#0000ff" />
                        <Text>Cargando categorías...</Text>
                    </View>
                ) : (
                    <FlatList 
                        contentContainerStyle={styles.list}
                        data={data} 
                        renderItem={({ item }) => 
                        <CategoryItem 
                            name={item} 
                            onPress={() => handlePress(item)} 
                        />}
                    />
                )
            }       
        </View>
    )
    
}

const createStyles = deviceWidth => StyleSheet.create({
    categoriesLoading:{
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    categories: {
        flexDirection: 'column',
        gap: 16,
    },
    list:{
        gap: 16,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Unbounded',
    }
})