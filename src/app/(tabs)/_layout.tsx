import { Tabs, router } from "expo-router";
import {MaterialIcons, MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Pressable } from "react-native";

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
                    headerTitle:"Quiz",
                    headerLeft:({}) => 
                    <Pressable onPress={()=>router.replace('/home')}>
                        <MaterialIcons name='arrow-back' size={25} color={'#31AFB4'}/>
                    </Pressable>,
                    headerLeftContainerStyle:{marginLeft:45, justifyContent:'center', alignContent:'center'},
                    headerTitleStyle:{
                        fontSize: 25,
                        fontFamily: 'RalewayBold',                        
                    },   
                    headerRight:({}) => 
                    <Pressable onPress={()=>router.replace('/')}>
                        <MaterialIcons name='logout' size={25} color={'#31AFB4'}/>
                    </Pressable>,
                    headerRightContainerStyle:{marginRight:45, justifyContent:'center', alignContent:'center'},                 
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
                    headerTitle:'Forum',
                    headerLeft:({}) => 
                    <Pressable onPress={()=>router.replace('/home')}>
                        <MaterialIcons name='arrow-back' size={25} color={'#31AFB4'}/>
                    </Pressable>,
                    headerLeftContainerStyle:{marginLeft:45, justifyContent:'center', alignContent:'center'},
                    headerTitleStyle:{
                        fontSize: 25,
                        fontFamily: 'RalewayBold',
                    },
                    headerRight:({}) => 
                    <Pressable onPress={()=>router.replace('/')}>
                        <MaterialIcons name='logout' size={25} color={'#31AFB4'}/>
                    </Pressable>,
                    headerRightContainerStyle:{marginRight:45, justifyContent:'center', alignContent:'center'},
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
                    headerTitle:'Appoio',
                    headerLeft:({}) => 
                    <Pressable onPress={()=> router.back()}>
                        <MaterialIcons name='menu' size={25} color={'#31AFB4'}/>
                    </Pressable>,
                    headerLeftContainerStyle:{marginLeft:45, justifyContent:'center', alignContent:'center'},
                    headerRight:({}) => 
                    <Pressable onPress={()=>router.replace('/')}>
                        <MaterialIcons name='logout' size={25} color={'#31AFB4'}/>
                    </Pressable>,
                    headerRightContainerStyle:{marginRight:45, justifyContent:'center', alignContent:'center'},
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
                    headerTitle:'Trilhas',
                    headerLeft:({}) => 
                    <Pressable onPress={()=> router.replace('/home')}>
                        <MaterialIcons name='arrow-back' size={25} color={'#31AFB4'}/>
                    </Pressable>,
                    headerLeftContainerStyle:{marginLeft:45, justifyContent:'center', alignContent:'center'},
                    headerTitleStyle:{
                        fontSize: 25,
                        fontFamily: 'RalewayBold',
                    },
                    headerRight:({}) => 
                    <Pressable onPress={()=>router.replace('/')}>
                        <MaterialIcons name='logout' size={25} color={'#31AFB4'}/>
                    </Pressable>,
                    headerRightContainerStyle:{marginRight:45, justifyContent:'center', alignContent:'center'},
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
                    headerTitle:'Perfil',
                    headerLeft:({}) => 
                    <Pressable onPress={()=> router.replace('/home')}>
                        <MaterialIcons name='arrow-back' size={25} color={'#31AFB4'}/>
                    </Pressable>,
                    headerLeftContainerStyle:{marginLeft:45, justifyContent:'center', alignContent:'center'},
                    headerTitleStyle:{
                        fontSize: 25,
                        fontFamily: 'RalewayBold',
                    },
                    headerRight:({}) => 
                    <Pressable onPress={()=>router.replace('/')}>
                        <MaterialIcons name='logout' size={25} color={'#31AFB4'}/>
                    </Pressable>,
                    headerRightContainerStyle:{marginRight:45, justifyContent:'center', alignContent:'center'},
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
