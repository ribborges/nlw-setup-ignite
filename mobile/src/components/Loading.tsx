import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.loading}>
            <ActivityIndicator color="#4c1d95" size='large'/>
        </View>
    );
}

const styles = StyleSheet.create({
    loading: {
      flex: 1,
      backgroundColor: '#09090A',
      alignItems: 'center',
      justifyContent: 'center',
    },
});