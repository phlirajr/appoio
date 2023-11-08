import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return ( 
    <Drawer>
      <Drawer.Screen
        name="./quiz" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Quiz",
          title: "Quiz",
          headerTitle: "Quiz"
          
        }}
      />
      <Drawer.Screen
        name="./profile" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Profile",
          title: "Profile",
        }}
      />
    </Drawer>
  )
}
