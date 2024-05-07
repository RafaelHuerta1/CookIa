import { Link } from "expo-router";
import React from "react";

import { StyleSheet, Text, View , TouchableOpacity} from "react-native";


// titulo, colores

export default function ButtonInfo({ titulo, color, ruta}) {
    return (
        ruta ? (    
            <View style={styles.containerBtn}>
                <TouchableOpacity style={{ backgroundColor: color, padding: 10, borderRadius: 5, width: '80%'}}>
                    <Link href={ruta}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>{titulo}</Text>
                    </Link>
                </TouchableOpacity>
            </View>
        ) : (
            <View style={styles.containerBtn}>
                <TouchableOpacity style={{ backgroundColor: color, padding: 10, borderRadius: 5, width: '80%'}}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>{titulo}</Text>
                </TouchableOpacity>
            </View>
            ) 
    );

}
const styles = StyleSheet.create({
    containerBtn: {
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
});