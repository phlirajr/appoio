import { Tabs } from "expo-router";
import {MaterialIcons, MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons";
import { useFonts } from "expo-font";

export default function TabRoutesLayout(){

    const [loaded] = useFonts({
        RalewayBold: require('../../../assets/fonts/Raleway/static/Raleway-Bold.ttf')
      });

      if (!loaded) {
        return null;
      }
    return(
        <Tabs>
            <Tabs.Screen
                name='quiz'
                options={{
                    headerTitle:"QUIZ",
                    headerTitleStyle:{
                        fontSize: 25,
                        fontFamily: 'RalewayBold',                        
                    },                    
                    tabBarLabel: "Quiz",
                    tabBarLabelPosition: 'below-icon',
                    tabBarLabelStyle:{
                        fontSize: 15,
                        fontWeight: 'bold'                        
                    },
                    tabBarInactiveTintColor: '#31AFB4',
                    tabBarActiveBackgroundColor: "#CCFF33",
                    tabBarActiveTintColor: "#31AFB4",
                    tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='head-question-outline' size={size} color={color}/>
                }}
            />
            <Tabs.Screen
                name='forum'
                options={{
                    headerTitle:'FORUM',
                    headerTitleStyle:{
                        fontSize: 25,
                        fontFamily: 'RalewayBold',
                    },
                    tabBarLabel: "Forum",
                    tabBarLabelPosition: 'below-icon',
                    tabBarLabelStyle:{
                        fontSize: 15,
                        fontWeight: 'bold'                        
                    },
                    tabBarInactiveTintColor: '#31AFB4',
                    tabBarActiveBackgroundColor: "#CCFF33",
                    tabBarActiveTintColor: "#31AFB4",
                    tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='forum-outline' size={size} color={color}/>
                }}
            />
            <Tabs.Screen
                name='home'
                options={{
                    headerShown:false,
                    headerTitle:'HOME',
                    headerTitleStyle:{
                        fontSize: 25,
                        fontFamily: 'RalewayBold'
                    },
                    tabBarLabel: "Home",
                    tabBarLabelPosition: 'below-icon',
                    tabBarLabelStyle:{
                        fontSize: 15,
                        fontWeight: 'bold',
                    },
                    tabBarInactiveTintColor: '#31AFB4',
                    tabBarActiveBackgroundColor: "#CCFF33",
                    tabBarActiveTintColor: "#31AFB4",
                    tabBarIcon: ({size, color}) => <SimpleLineIcons name='home' size={size} color={color}/>
                }}
            />
            <Tabs.Screen
                name='trilhas'
                options={{
                    headerTitle:'TRILHAS',
                    headerTitleStyle:{
                        fontSize: 25,
                        fontFamily: 'RalewayBold',
                    },
                    tabBarLabel: "Trilhas",
                    tabBarLabelPosition: 'below-icon',
                    tabBarLabelStyle:{
                        fontSize: 15,
                        fontWeight: 'bold',
                    },
                    tabBarInactiveTintColor: '#31AFB4',
                    tabBarActiveBackgroundColor: "#CCFF33",
                    tabBarActiveTintColor: "#31AFB4",
                    tabBarIcon: ({size, color}) => <MaterialIcons name='add-road' size={size} color={color}/>
                }}
            />            
                <Tabs.Screen
                name='profile'
                options={{
                    headerTitle:'PERFIL',
                    headerTitleStyle:{
                        fontSize: 25,
                        fontFamily: 'RalewayBold',
                    },
                    tabBarLabel: "Perfil",
                    tabBarLabelPosition: 'below-icon',
                    tabBarLabelStyle:{
                        fontSize: 15,
                        fontWeight: 'bold',
                    },
                    tabBarInactiveTintColor: '#31AFB4',
                    tabBarActiveBackgroundColor: "#CCFF33",
                    tabBarActiveTintColor: "#31AFB4",
                    tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='account-outline' size={size} color={color}/>
                }}
            />
        </Tabs>
    )
}
