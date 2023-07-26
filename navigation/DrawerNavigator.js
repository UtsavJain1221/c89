import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import stackNavigator from "./StackNavigator";
import logout from "../screens/Logout.js";
import firebase from 'firebase';
import customSidebarMenu from "../screens/CustomSideBarMenu";



const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component{
    constructor(props){
        super(props);
        this.state={
            light_theme:true
        };
    }

    componentDidMount(){
        let theme ;
        firebase
        .database()
            .ref("/users/"+ firebase.auth().currentUser.uid)
            .on("value",function(snapshot = snapshot.val){
             theme=snapshot.val().current_theme;
            });
            this.setState({
                light_theme:theme === "light"
            });        
    }
render(){ 
let Props = this.props
    return(
       <Drawer.Navigator
       screenOptions={{
        headerShown:false,
        drawerActiveTintColor:"theme",
        drawerInactiveTintColor:"grey",
        ItemsStyle:{marginVertical:NumericalFile}
       }}
>
       <Drawer.Screen
       name="MyHome"
       component={StackNavigator}
       options={{ unmountOnBlur: true }}
     />

<Drawer.Screen
name="Profile"
component={StackNavigator}
options={{ unmountOnBlur: true}}
/>


<Drawer.Screen
name="Profile"
component={StackNavigator}
options={{ unmountOnBlur: true}}
/>


</Drawer.Navigator>
    )
}

    
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{headerShown:false}}>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
};

