import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Link, Stack } from 'expo-router';
import { recetasMain } from "../data/datosRecetas";



// desayuno, comida, cena y postre

// format json;
/**
 * 
        id: 1,
        nombre: 'Tarta de manzana',
        tiempo: '15 Minutos',
        descripcion: 'Elabora esta tarta...',
        img: require('../assets/img/ftoUnoEnsaladaPlato.png'),
        categoria: 'postre'
 */

// create a card 


export default function RecetasDiabe() {
  console.log(recetasMain[0].nombre)
  return (



    <View style={{ marginTop: 50 }}>
      <Text>  {recetasMain[0].nombre} </Text>
      <Text>  {recetasMain[0].descripcion} </Text>
      <Text>  {recetasMain[0].categoria} </Text>
    </View>

  );
}

