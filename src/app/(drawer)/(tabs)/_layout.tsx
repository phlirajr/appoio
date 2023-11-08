import { Tabs } from "expo-router";

export default function TabRoutesLayout(){
    return(
        <Tabs screenOptions={{headerShown:false}}>
            <Tabs.Screen
                name='quiz'
                options={{
                    title:"Quiz",
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title:"Profile",
                }}
            />
        </Tabs>
    )
}
