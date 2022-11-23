import React, { useContext, useState, useEffect } from "react";
import { Text, View, Button, ScrollView, TouchableOpacity } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from "../context/AuthContext";
import axios from 'axios';
import { BASE_URL } from "../config";
import CompaniesList from "../components/CompaniesList";



const HomeScreen = () => {
    const {logout,userInfo, isLoading} = useContext(AuthContext);
    const [jobList, setJobList] = useState([]);
    useEffect(()=>{
        getJobList(userInfo.token);
    },[]);
    const getJobList = (token) =>{
        axios.get(`${BASE_URL}/getJobs`,
        { 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },  
        })
        .then(res=>{
            setJobList(res.data.data);
        })
        .catch(e =>{
            console.log(e);
        });
    };
    
    return (
        <View>
            <View style={{padding:20, backgroundColor:"#ffffff", flexDirection: 'row'}}>
                <Text style={{fontSize:20, fontWeight:'bold', marginTop:6}}>Home</Text>
                <TouchableOpacity style={{padding:10, backgroundColor:"red", width:70, textAlign:'center', marginLeft:230, borderRadius:10}} onPress={()=>logout()}>
                    <Text style={{color:'white', fontWeight:'bold'}}>Logout</Text>
                </TouchableOpacity>
            </View>
            <Text style={{padding:20, fontSize:25, fontWeight:'bold'}}>All companies</Text>
            <CompaniesList></CompaniesList>
            <Spinner visible={isLoading}/>
            <View>
            <Text style={{padding:20, fontSize:25, fontWeight:'bold'}}>All jobs list here</Text>
            </View>
            <ScrollView>
                {jobList.map((item, index)=>{
                    return(
                        <View key={index} style={{padding:20, backgroundColor:"#fffff0", width:370, marginLeft:10, borderRadius:5,  flexDirection: "row", flexWrap: "wrap", marginTop:10}}>
                            <View style={{padding:10, width:120, backgroundColor:"#1AD4E0", borderRadius:100}}>
                                <Text style={{textAlign:'center', fontSize:30, marginTop:26}}>logo</Text>
                            </View>
                            <View style={{padding:10}}>
                                <Text style={{fontSize:18, fontWeight:'bold'}}>
                                    Position: {item.job_title}
                                </Text>
                                <Text>Company: {item.company_name}</Text>
                                <Text>Salary: {item.salary} $</Text>
                                <Text style={{marginTop:15}}>Expire Date: {item.expire_date}</Text>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    );
};

export default HomeScreen;