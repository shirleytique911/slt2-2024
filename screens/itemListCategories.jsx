import { ActivityIndicator, FlatList, StyleSheet, Text, View, useWindowDimensions } from "react-native"
import { ProductItem } from "../components/productItem"
import { SafeAreaView } from "react-native-safe-area-context"
import { SearchInput } from "../components/searchInput"
import { useEffect, useState } from "react"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { useGetProductsByCategoryQuery, useGetProductsByWishlistQuery, usePostWishListMutation } from "../services/shopService"
import { BREAKPOINTS } from "../utils/breakpoint"


export const ItemListCategories = () => {
  const { navigate, setOptions } = useNavigation()
  const [textToSearch, setTextToSearch] = useState('')
  const category = useSelector(state => state.shop.categorySelected)
  const { data: products, isLoading, error} = useGetProductsByCategoryQuery(category)
  const [productsFiltered, setProductsFiltered] = useState(products)
  const [triggerPostList, result] = usePostWishListMutation()
  const userData = useSelector(state => state.auth.value.user)
  const localId = userData.localId
  const { data: list, refetch} = useGetProductsByWishlistQuery(localId);
  const { width } = useWindowDimensions()
  const styles = createStyles(width)

  
  const navigateToItemDetails = productId => {
    navigate('ItemDetail', { productId });
  };
  const handleListProduct = async item => {
    triggerPostList({ list: item,localId, productId: item.id })
    refetch()
    navigate('ListsTab')
  };

  const capitalizeCategory = categoryToCapitalize => {
    const [firstLetter, ...restLetters] = categoryToCapitalize
    const category = firstLetter.toUpperCase() + restLetters.join('')
    return category
  }
  const handleSearch = textToSearch => {
    setTextToSearch(textToSearch)
    const productsFiltered = products.filter(product =>
      product.title.toLowerCase().includes(textToSearch.toLowerCase().trim())
    )
    setProductsFiltered(productsFiltered)
  }

  useEffect(() => setProductsFiltered(products), [products])

  useFocusEffect(() => {
    setOptions({ title: capitalizeCategory(category) })
  })

  if (isLoading) return (
    <View style={styles.itemListCategories}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Cargando productos...</Text>
    </View>
  )

  return (
    <SafeAreaView style={styles.itemListCategories}>
      <SearchInput
        onChangeText={handleSearch} value={textToSearch}
        placeholder='Buscar  aqui....'
      />
      <FlatList
        data={productsFiltered}
        key={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) =>
          <ProductItem
            {...item}
            onPress={() => navigateToItemDetails(item.id)}
            onSvgPress={() => handleListProduct(item)}
          />}
      />
      {productsFiltered && productsFiltered.length === 0 ? (
        <Text>
          No se han encontrado libros con la búsqueda "{textToSearch}"
        </Text>
      ) : null}
    </SafeAreaView>
  )
}

const createStyles = deviceWidth => StyleSheet.create({
  list: {
    gap: 32,
  },
  itemListCategories: {
    gap: 32,
    flex: 1,
    paddingTop: -40,
    paddingBottom: 16,
    paddingHorizontal: deviceWidth >= BREAKPOINTS.MEDIUM ? '30%' : 16,
  },
})
