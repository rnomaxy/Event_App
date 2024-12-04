import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    eventName: {
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,
      marginBottom: 5
    },
    eventDate: {
      color: '#6B6B6B',
      fontSize: 16,
    },
    input: {
        flex: 1,
        backgroundColor: '#1F1E25',
        height: 56,
        borderRadius: 5,
        color: '#FFFFFF',
        padding: 16,
        fontSize: 16,
        marginRight: 7
    },
    bottonText: {
      color: '#FFF',
      fontSize: 30
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31CF67',
      alignItems: 'center',
      justifyContent: 'center'
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 32,
      marginBottom: 42
    },
    listEmptyText: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center'
    }
})