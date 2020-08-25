import React, { useState, useEffect } from 'react';
import {Text, View,StyleSheet,FlatList,Image,ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import clash from '../api/clash';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';



const ListScreen = ({navigation}) => {

    

    const [results,setResults] = useState(null);
    
    

    const getResult = async () => {

        
        const response = await clash.get('/clans?locationId=32000113&limit=50');
        setResults(response.data);
       
        

    
}
    useEffect(() => {
        getResult();
    },[]);
    if(!results) {
        return null;
    }

    return (
        <>
        <View style={styles.backgroundStyle}>
            <ScrollView>
                <Text style={styles.heading}>List of Clans</Text>   
                <FlatList 
                    data={results.items}
                    keyExtractor={result => results.items.id}
                    renderItem={({item}) => {
                    return( 
                            <TouchableOpacity
                                onPress={() => navigation.navigate('ResultsShow',{id: item.tag})}>
                                
                                <View style={styles.cardBox}>

                                    <LinearGradient 
                                        start={{x: 1, y: 1}} end={{x: 1, y: 0}}
                                        locations={[0.1, 0.9]}
                                        colors={['#FF393B','#EE515C']}
                                        style={styles.gradient}>

                                        <View style={styles.badge}>
                                            <Image style={styles.image} source={{uri: item.badgeUrls.medium}} /></View>
                                        <View style={styles.details}>
                                            <View>

                                                    <Text style={styles.clanName}>{item.name}</Text>
                                                    <Text style={styles.clanDetails}>Clan Points:{item.clanPoints}</Text>
                                                    <Text style={styles.clanDetails}>No.of Members:{item.members}</Text></View>
                                            
                                            </View>

                                        <View style={styles.round}>
                                            <Icon name="chevron-right" size={20} style={{alignSelf:"center", marginTop:5, marginLeft:3}}/>
                                        </View>
                                        

                                        


                                    </LinearGradient>
                                
                                </View>
                            </TouchableOpacity>
                        );  
                    }}
                />

            </ScrollView>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        
        backgroundColor: '#292442',
       
    
        
    },
    cardBox:{
        marginTop:50,
        marginBottom:30,
        marginLeft: 50,
        marginRight: 50,
        height:300,
        alignContent:"center",
        elevation:6,
        
        
    },

    detailsBox:{
        backgroundColor:"#5863aa",
        borderRadius: 10,
        borderColor: '#101010',
        borderWidth: 2, 
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
       
    },
   
    badge:{
        
        alignSelf:"center",
        backgroundColor:"#f0f0f0",
        borderRadius:100,
        width:110,
        height:110,
        marginTop:-50,
        borderWidth:4,
        borderColor:"#302D5A",
        position:"relative"
        

    },
    clanName: {
        fontSize: 20,
        alignSelf:'center',
        fontFamily:"Supercell-magic-webfont",
        marginTop: 5,
        marginBottom:10,
        textShadowColor:'#333333',
        textShadowOffset:{width: 2, height: 1},
        textShadowRadius:2,
        color:'white'
    },
    heading: {
        fontSize: 23,
        textShadowColor:'#101010',
        textShadowOffset:{width: 3, height: 2},
        textShadowRadius:1,
        fontFamily:"Supercell-magic-webfont",
        alignSelf:'center',
        marginHorizontal: 15,
        marginTop: 25,
        marginBottom:30,
        color:'#fff'
    },
    details: {
       marginTop:30 
    },
    clanDetails: {
        
        fontSize: 14,
        textShadowColor:'#101010',
        textShadowOffset:{width: 1, height: 2},
        textShadowRadius:1,
        fontFamily:"Supercell-magic-webfont",
        alignSelf:'center',
        marginTop: 15,
        color:'white'
    },
    image:{
        width: 80,
        height:80,
        alignSelf:"center",
        justifyContent:"center",
        marginTop:15
    },
    gradient:{
        flex:1,
        borderRadius: 30,
        
    },
    round:{
        position:"relative",
        backgroundColor:"#fff",
        borderRadius:100,
        width:30,
        height:30,
        alignSelf:"center",
        marginTop:40
    },
    
});

export default withNavigation(ListScreen);