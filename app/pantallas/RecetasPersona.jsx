import React from "react";
import { StyleSheet, Text, View , Image, ScrollView} from "react-native";
import { Link, Stack } from 'expo-router';
import ButtonInfo from "../componentes/ButtonInfo";


export default function RecetasPersona() {
    return (
        <View >



        <View style={{marginTop: 150}}>
            <ButtonInfo
            titulo='Recetas Para Personas con Diabetes y presion arterial alta'
            color='green' 

            />
              <ButtonInfo
            titulo='Recetas Para Personas con Diabetes y colesterol alto'
       color='green'
            />
              <ButtonInfo
            titulo='Recetas Para Personas con Diabetes y problemas de tiroides'
            color='green'

            />
        </View>


        </View>

    );
}

