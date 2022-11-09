import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Navigator from './pathways/HomeStack';

export default function App() {
  return (
	  
    <Navigator />
  );
}


