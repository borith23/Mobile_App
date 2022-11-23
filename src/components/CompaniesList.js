import React, {useEffect, useContext, useState} from "react";
import {FlatList, Text, View} from "react-native";
import { AuthContext } from "../context/AuthContext";
import axios from 'axios';
import { BASE_URL } from "../config";


const CompaniesList = () => {
    const {userInfo} = useContext(AuthContext);
    const [companies, setCompanies] = useState([]);
    useEffect(()=>{
        getCompanies(userInfo.token);
    },[]);
    const getCompanies = (token)=>{
        axios.get(`${BASE_URL}/companies`,
        { 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },  
        })
        .then(res=>{
            console.log(res.data);
            setCompanies(res.data);
        })
        .catch(e =>{
            console.log(e);
        });
    }
    return (
        <View>
             <FlatList
            horizontal={true}
            data={companies}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{marginVertical: 10}}
            renderItem={({ item })=>(
                <View style={{marginLeft:20, alignItems:'center'}}>
                    {/* <View style={{width:50, height:50}}>
                        <Image
                            source={item.image}
                            style={{width:50, height:50, borderRadius:100}}
                        ></Image>
                    </View> */}
                    <Text style={{padding:25, backgroundColor:"lightblue", borderRadius:5}}>{item.company_name}</Text>
                </View>
            )}
           ></FlatList>
        </View>
    );
    
};


export default CompaniesList;