import React, {useState,useEffect } from "react";
import {View,Text,StyleSheet,FlatList,Image,ScrollView} from 'react-native';
import clash from '../api/clash'
import LinearGradient from 'react-native-linear-gradient';

const PlayerDetailsScreen = ({navigation}) => {

    const [resultss,setResultss] =useState(null);
    const [errorMessage,setErrorMessage] = useState('');
    const id = navigation.getParam('id');
    const encodedKey = encodeURIComponent(id);
    const getDetail = async id => {

        
       try{

        const response = await clash.get('/players/'+encodedKey);
        setResultss(response.data);
       } catch(err) {
            
            console.log(err.response);
            setErrorMessage('Something went wrong');
       }
    }

    useEffect(() => {
        getDetail(encodedKey);
    },[]);

    if(!resultss) {
        return null;
    }

    return (
        <>
           <View style={styles.backgroundStyle}>
                <ScrollView>

                    <Text style={styles.heading}>Achievments</Text>

                    <FlatList 
                        data={resultss.achievements}
                        renderItem={({item}) => {
                        return( 

                            <View style={styles.cardBox}>

                                <LinearGradient 
                                    start={{x: 1, y: 1}} end={{x: 1, y: 0}}
                                    locations={[0.1, 0.9]}
                                    colors={['#FE9754','#FFB65A']}
                                    style={styles.gradient}>

                                        <Text style={styles.clanName}>{item.name}</Text>

                                        <View style={styles.details}>
                                                
                                                <Text style={styles.clanDetails}>Value:{item.value}</Text>
                                                <Text style={styles.clanDetails}>Stars:{item.stars}</Text>
                                                <Text style={styles.clanDetails}>Target:{item.target}</Text>
                                                <Text style={styles.clanDetails}>Village:{item.village}</Text>
                                                <Text style={styles.clanDetails}>Completion Info:{item.completionInfo}</Text>
                                        </View>

                                </LinearGradient>
                            </View> 

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
        marginTop:25,
        marginBottom:30,
        marginLeft: 50,
        marginRight: 50,
        height:300,
        alignContent:"center",
        elevation:6,
        
    },
   
    badge:{
        
        alignSelf:"center",
        backgroundColor:"#fff",
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
        marginTop: 20,
        marginLeft:10,
        marginRight:10,
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
        marginBottom:20,
        color:'#fff'
    },
    details: {
       marginTop:10,
       marginBottom:20,
       alignItems:"center"
    },
    clanDetails: {
        
        fontSize: 16,
        textShadowColor:'#101010',
        textShadowOffset:{width: 1, height: 2},
        textShadowRadius:1,
        fontFamily:"Supercell-magic-webfont",
        alignSelf:'center',
        marginTop: 20,
        marginLeft:20,
        color:'white',
        alignSelf:"flex-start",
        marginBottom:-13,
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
        position:"relative",
        borderRadius: 30,
        
    },
    
    
});

export default PlayerDetailsScreen;