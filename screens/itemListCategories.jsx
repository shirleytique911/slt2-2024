import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native"
import { ProductItem } from "../components/productItem"
import { SafeAreaView } from "react-native-safe-area-context"
import { SearchInput } from "../components/searchInput"
import { useEffect, useState } from "react"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { useGetProductsByCategoryQuery } from "../services/shopService"

export const ItemListCategories = () => {
  const { navigate, setOptions } = useNavigation()
  const [textToSearch, setTextToSearch] = useState('')
  const category = useSelector(state => state.shop.categorySelected)
  const { data: products, isLoading, error } = useGetProductsByCategoryQuery(category)
  const [productsFiltered, setProductsFiltered] = useState(products)

  const navigateToItemDetails = productId => {
    navigate('ItemDetail', { productId });
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
        placeholder='Buscar libros aqui....'
      />
      <FlatList
        data={productsFiltered}
        key={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) =>
          <ProductItem
            {...item}
            onPress={() => navigateToItemDetails(item.id)}
          />}
      />
      {productsFiltered && productsFiltered.length === 0 ? (
        <Text>
          No se han encontrado zapatillas con la búsqueda "{textToSearch}"
        </Text>
      ) : null}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  list: {
    gap: 32,
  },
  itemListCategories: {
    gap: 32,
    flex: 1,
    paddingTop: -40,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  brand: {
    fontFamily: 'Unbounded',
    fontSize: 18,
    textTransform: 'capitalize',
    textAlign: 'center'
  }
})
