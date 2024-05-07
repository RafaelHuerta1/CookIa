import React from "react";
import { StyleSheet, Text, View , Image, ScrollView} from "react-native";
import { Link, Stack } from 'expo-router';
import ButtonInfo from "../componentes/ButtonInfo";


export default function RecetasPersona() {
    return (
        <View >

<Stack.Screen
        options={{
          title: 'Recetas Personalizadas.',
          headerStyle: { backgroundColor: '#90EE90' },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

          //headerTitle: props => <LogoTitle {...props} />,
        }}
      />

        <View>
            <Text>Recetas Personalizadas</Text>
            <ButtonInfo
            titulo='Recetas Para Personas con Diabetes y presion arterial alta'
            color='#90EE90'

            />
              <ButtonInfo
            titulo='Recetas Para Personas con Diabetes y colesterol alto'
            color='#90EE90' // cambiar el color de background: #

            />
              <ButtonInfo
            titulo='Recetas Para Personas con Diabetes y problemas de tiroides'
            color='#90EE90'

            />
        </View>


        </View>

    );
}

