import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Note from './Note';

export default class Home extends Component {
    state = {
        notesList : [],
        noteText : '',
    };
    onChangeInput = (noteText) =>{
        this.setState({noteText});
    };
    render() {
        const {notesList, noteText} = this.state; 
        const notes = notesList.map((key, val) => {

        });
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>IDO - Application</Text>
                </View>
                <ScrollView style={styles.scrollStyle}>
                    {notes}
                </ScrollView>
                <View style = {styles.footerContainer}>
                    <TextInput 
                        autoCorrect={false}
                        placeholder = "Enter Note"
                        placeholderTextColor= 'black'
                        underlineColorAndroid = 'transparent'
                        onChangeText= {this.onChangeInput}
                        value={noteText}
                    />
                </View>
                <TouchableOpacity style= {styles.addButton} onPress={}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
      }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    headerContainer : {

    },
    headerText : {
        color: 'black',
        fontFamily: 'Roboto',
    },
    scrollStyle : {

    },
    footerContainer : {
        
    },
    addButton : {

    },
    buttonText: {

    },
});