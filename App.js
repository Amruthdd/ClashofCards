import React from 'react';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ListScreen from './src/screens/listScreen';
import LinearGradient from 'react-native-linear-gradient';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import PlayerDetailsScreen from './src/screens/PlayerDetailsScreen';
import { color } from 'react-native-reanimated';


const navigator = createStackNavigator(
  {
    List: ListScreen,
    ResultsShow: ResultsShowScreen,
    PlayerDetails:PlayerDetailsScreen,
  },
  {
      initialRouteName:'List',
      defaultNavigationOptions:
      {
        title:"Clash of Cards",
       
        headerStyle:{
          
          backgroundColor:"#302D5A",
          
        },
        headerTitleStyle: {
          fontFamily: "Supercell-magic-webfont",
          fontSize:25,
          textShadowColor:'#101010',
          textShadowOffset:{width: 2, height: 1},
          textShadowRadius:1,

        },
        
       
        headerTintColor: '#f0f0f0'
        
     
      }
  }
);

export default createAppContainer(navigator);