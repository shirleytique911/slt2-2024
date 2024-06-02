import { theme } from "../configs/theme";
import { Search } from "../icons/search";
import { View, TextInput, StyleSheet } from "react-native";

export const SearchInput = props => (
    <View style={styles.searchInput}>
        <Search />
        <TextInput {...props}/>
    </View>  
)

const styles = StyleSheet.create({
    searchInput: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: theme.gray[200],
        paddingHorizontal: 16,
        paddingVertical: 8,
        gap: 8,
    },

})