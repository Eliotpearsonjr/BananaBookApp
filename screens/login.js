import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login({ navigation }) {
	
	const pressHandler = () => {
		navigation.navigate('Home')
	} 
	
	const [text, setText] = useState('');
	const [passwordText, setPassword] = useState('');
	
	const styles = StyleSheet.create({
	  // centers the text within the login button
	  centeredText: {
	    textAlign: 'center',
	    color: '#914F16',
	    fontWeight: 'bold',
	  },

	  container: {
	    flex: 1,
	    backgroundColor: '#fff',
	    alignItems: 'center',
	    justifyContent: 'center',
	  },

	  // formats the 'forgot password?' text
	  forgottenPassword: {
	    fontSize: 12,
	    color: '#914F16',
	    textAlign: 'right',
	  },

	  // formats the 'forgot password?' button
	  forgottenPasswordFrame: {
	    width: 300,
	    padding: 4,
    
	  },

	  // input fields
	  input: {
	    height: 40,
	    width: 12,
	    borderWidth: 1,
	    width: 300,
	    padding: 8,
	    backgroundColor: '#F1F1F1',
	    borderColor: '#C6C6C6',
	    marginTop: 20,
	    marginBottom: 10,
	  },

	  // size and color of the login button
	  loginButton: {
	    width: 300,
	    padding: 8,
	    backgroundColor: '#FFD79C',
    
	  },

	  // Banana Book Title format on login page
	  titleFormat: {
	    padding: 8,
	    marginBottom: 150,
	  },

  
	});
	

    return (
  // code elements within this view tag
<View style={styles.container}>
      <Text style= {styles.titleFormat}>Banana Book</Text>

      <Text>The Sweetest Way to store your notes!</Text>

      {/*Username Field*/}
      <View>
        <TextInput 
          style={styles.input}
          placeholder= 'username'
          onChangeText={setText}
          value={text}
          
        />
      </View>

      {/*Password Field*/}
      <View>
        <TextInput 
          style={styles.input}
          placeholder= 'password'
          onChangeText={setPassword}
          value={passwordText}
          
        />
      </View>

      {/*Forgot Password Button*/}
      <TouchableOpacity style={styles.forgottenPasswordFrame}>
        <Text style= {styles.forgottenPassword}>Forgot Password?</Text>
      </TouchableOpacity>


      <Text>{text}</Text> 
      <Text>{passwordText}</Text>
    

      <TouchableOpacity onPress={pressHandler} style= {styles.loginButton}>
        <Text style= {styles.centeredText}>LOGIN</Text>
      </TouchableOpacity>
      

      <StatusBar style="auto" />


    </View>
    )
	

}

