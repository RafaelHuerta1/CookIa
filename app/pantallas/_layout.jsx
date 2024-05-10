import { Stack } from 'expo-router';
export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor:'#90EE90',

        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="Home"  options={{ title: 'Inicio' }} />
      <Stack.Screen name="RecetasPersona" options={{ title: 'Recetas Personalizadas' }} />
      <Stack.Screen name="RecetasDiabe" options={{ title: 'Recetas para Diabeticos' }} />

    </Stack>
  );
}