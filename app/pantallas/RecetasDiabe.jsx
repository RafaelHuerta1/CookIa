import React from "react";
import { StyleSheet, Text, View , Image, ScrollView} from "react-native";
import { Link, Stack } from 'expo-router';


export default function RecetasDiabe() {
    return (
        <View >

<Stack.Screen
        options={{
          title: 'Recetas Diabeticos',
          headerStyle: { backgroundColor: '#90EE90' },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

          //headerTitle: props => <LogoTitle {...props} />,
        }}
      />



                <Text>Hi en mi pag de recetas</Text>
        </View>

    );
}

