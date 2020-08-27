import React, {useState,useEffect } from "react";
import {View,Text,StyleSheet,FlatList,Image,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import clash from '../api/clash';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';



const ResultsShowScreen = ({navigation}) => {

    const [result,setResult] =useState(null);
    const [errorMessage,setErrorMessage] = useState('');
    const id = navigation.getParam('id');

    const encodedKey = encodeURIComponent(id);
    const getDetail = async id => {

        
       try{
       
        const response = await clash.get('/clans/'+encodedKey+'/members');
        setResult(response.data);
        
       } catch(err) {
            
            console.log(err.response);
            setErrorMessage('Something went wrong');
       }
    }

    useEffect(() => {
        getDetail(encodedKey);
    },[]);

    if(!result) {
        return null;
    }

    return (
        <>
           <View style={styles.backgroundStyle}>
            <ScrollView>
                <Text style={styles.heading}>Members of Clan</Text>
            
                <FlatList 
                        data={result.items}
                        renderItem={({item}) => {
                        return( 
                            <TouchableOpacity
                                onPress={() => navigation.navigate('PlayerDetails',{id: item.tag})}>

                                <View style={styles.cardBox}>
                                    <LinearGradient 
                                        start={{x: 1, y: 1}} end={{x: 1, y: 0}}
                                        locations={[0.05, 0.95]}
                                        colors={['#31A982','#5AD68A']}
                                        style={styles.gradient}>

                                    
                                            
                                        <View style={styles.details}>
                                            <View style={styles.badge}>
                                                <Image style={styles.image} 
                                                       source={require('./image/profile.png')}
                                                       resizeMode="contain" />
                                            </View>
                                            <View style={styles.detBox}>
                                               
                                                <Text style={styles.clanName}>{item.name}</Text>
                                                <View style={{flex:1,flexDirection:"row"}}>
                                                    <Text style={styles.clanDetails}>Rank:  {item.clanRank}</Text>
                                                    <Text style={styles.clanDetails}>Role:  {item.role}</Text>
                                                </View>

                                                <View style={{flex:1,flexDirection:"row",position:"relative"}}>
                                                    <Text style={styles.clanDetails}>Donations:  {item.donations}</Text>
                                                </View>
                                                <Text style={[{marginBottom:10},styles.clanDetails]}>Expert Level:  {item.expLevel}</Text>
                                            </View>
                                       
                                        
                                            <View style={styles.round}>
                                                    <Icon name="chevron-right" size={20} style={{alignSelf:"center", marginTop:6, marginLeft:4}}/>
                                            </View>
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

        flex:1,
        marginTop:10,
        marginBottom:30,
        marginLeft: 10,
        marginRight: 10,
        alignContent:"center",
        elevation:6,
        
        
    },

    detBox:{
        flex:6,
    },
    badge:{
        
        alignSelf:"center",
        backgroundColor:"#fff",
        borderRadius:100,
        width:80,
        height:80,
        marginLeft:10,
        marginTop:10,
        marginBottom:10,
        borderWidth:4,
        borderColor:"#302D5A",
        position:"relative"
        

    },
    clanName: {
        fontSize: 18,
        alignSelf:'flex-start',
        fontFamily:"Supercell-magic-webfont",
        marginTop: 10,
        marginBottom:10,
        marginLeft:10,
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
       flexDirection:"row"
    },
    clanDetails: {

        fontSize: 14,
        fontFamily:"Nexa Bold",
        marginLeft:10,
        color:'white',
        position:"relative"
    },
    image:{
        width: 50,
        height:50,
        alignSelf:"center",
        marginTop:10, 
    },
    gradient:{
        flex:1,
        borderRadius: 60,
        
    },
    round:{
        
        position:"relative",
        backgroundColor:"#fff",
        borderRadius:100,
        width:30,
        height:30,
        alignSelf:"center",
        marginRight:15
    },
    
});

export default withNavigation(ResultsShowScreen);