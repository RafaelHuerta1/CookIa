import React from "react";
import { StyleSheet, Text, View , Image, ScrollView} from "react-native";

// recetas para diabeticos -- puras recetas para diabeticos
{/** arreglar los nombre verdaderos, despues.... */}

/**
 * Ensalada de Espinacas y Fresas (15 minutos): Espinacas frescas, fresas, nueces y un aderezo ligero de vinagre balsámico.
Sopa de Quinua y Vegetales (30 minutos): Quinua, zanahorias, apio, cebolla y caldo de pollo bajo en sodio.
Pollo a la Parrilla con Ensalada de Verduras (30 minutos): Pechuga de pollo a la parrilla servida con una ensalada de lechuga, tomate, pepino y aderezo bajo en grasa.
Tofu Salteado con Brócoli (20 minutos): Tofu, brócoli, ajo, salsa de soja baja en sodio y aceite de oliva.
Pescado al Horno con Quinua y Espárragos (45 minutos): Filete de pescado al horno, quinua cocida y espárragos al vapor.
Ensalada de Pollo y Manzana (15 minutos): Pollo a la parrilla, manzana, lechuga, nueces y aderezo bajo en grasa.
Huevos Revueltos con Espinacas y Queso (10 minutos): Huevos revueltos con espinacas frescas y queso bajo en grasa.
Yogur con Frutas y Nueces (5 minutos): Yogur bajo en grasa, frutas frescas y un puñado de nueces.
Tacos de Pescado con Salsa de Aguacate (30 minutos): Filetes de pescado a la parrilla, tortillas de maíz, salsa de aguacate y una ensalada de repollo.
Lentejas con Arroz Integral y Verduras (60 minutos): Lentejas cocidas, arroz integral y una mezcla de verduras al vapor.
 */

const dataRecetas = [
    {
      id: 1,
      nombre: " Ensalada de Espinacas y Fresas ",
      tiempo: "15 Minutos",
      img: require('../assets/img/ftoUnoEnsaladaPlato.png'),
    },
    {
      id: 2,
      nombre: "Sopa de Quinua y Vegetales",
      tiempo: "30 Minutos",
      img: require('../assets/img/ftoUnoEnsaladaPlato.png'),
    },
    {
      id: 3,
      nombre: "Pollo a la Parrilla con Ensalada de Verduras",
      tiempo: "30 Minutos",
      img: require('../assets/img/ftoUnoEnsaladaPlato.png'),
    },
    {
      id: 4,
      nombre: "Tofu Salteado con Brócoli ",
      tiempo: "20 Minutos",
      img: require('../assets/img/ftoUnoEnsaladaPlato.png'),
    },
    {
      id: 5,
      nombre: "Pescado al Horno con Quinua y Espárragos",
      tiempo: "45 Minutos",
      img: require('../assets/img/ftoUnoEnsaladaPlato.png'),
    },
  ];

  // create a component
  const Recetas = ({ nombre, tiempo, img }) => {
    return (
                <View style={styles.containerRecetasMain}>
                <Image source={img} style={{ width: 200, height: 200, alignItems: 'center'}} />
                <Text>{nombre}</Text>
                <Text>{tiempo}</Text>
    </View>
    );
  }


export default function Home() {

    return (
        <View style={styles.container}>
         <View style={styles.containerTextoMain}>
            <View style={styles.containerTxtRecetas}>
            <Text style={styles.txtMain}>Mejores Recetas para Diabeticos</Text> 
            <Text style={styles.txtVerMasMain}>Ver mas.</Text>
        </View>
        

        <ScrollView horizontal>

        <View style={{ flexDirection: 'row' }}>
                        {dataRecetas.map((receta) => (
                            <Recetas
                                key={receta.id}
                                nombre={receta.nombre}
                                tiempo={receta.tiempo}
                                img={receta.img}
                            />
                        ))}
                    </View>
            </ScrollView>
     

        </View>

        </View>
    );
    }
const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        
    },
    containerTxtRecetas: {
        width: '100%',
        height: 100,
        justifyContent: 'space-evenly',
    },
    txtMain: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'center',
    },
    containerTextoMain: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
    txtVerMasMain: {
        fontSize: 15,
        color: 'green',
        textAlign: 'center',
    },
    containerRecetasMain: {
        marginVertical: 10,
        width:250,
        height: 300,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#90EE90', // cambiar a verde mas claro en hexacedimal
        borderRadius: 22,
        padding: 10,
    },


    });
