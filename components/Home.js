import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    StatusBar,
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
    addNote = () => {
        const {notesList, noteText} = this.state;
        var d = new Date();
        if(noteText != ''){
            notesList.push({
                'date' : d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear(),
                'note' : noteText,
            });
            this.setState({noteText: ''});
            this.setState({notesList});
        }  
    };
    deleteNoteHandler = (key) => {
        const {notesList} = this.state;
        notesList.splice(key, 1);
        this.setState({notesList});
    };
    render() {
        const {noteText, notesList} = this.state;
        const notes = notesList.map((val, key) => (
             <Note key={key} keyVal={key} note={val} deleteNote = {() => this.deleteNoteHandler(key)}/>
        ));
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>IDO</Text>
                </View>
                <ScrollView style={styles.scrollStyle}>
                    {notes}
                </ScrollView>
                <View style = {styles.footerContainer}>
                    <TextInput 
                        autoCorrect={false}
                        placeholder = "> Enter Note"
                        placeholderTextColor='white'
                        underlineColorAndroid = 'transparent'
                        onChangeText= {this.onChangeInput}
                        value={noteText}
                        style={styles.inputStyle}
                    />
                </View>
                <TouchableOpacity style= {styles.addButton} onPress={this.addNote}>
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
        backgroundColor: 'slateblue',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: 'dimgrey'

    },
    headerText : {
        color: 'gainsboro',
        fontFamily: 'Roboto',
        fontSize: 30,
        padding: 26,
    },
    scrollStyle : {
        flex: 1,
        marginBottom: 100,
    },
    footerContainer : {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,

    },
    inputStyle: {
        alignSelf: 'stretch',
        color: 'white',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth:5,
        borderTopColor: '#ededed',
    },
    addButton : {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 80,
        backgroundColor: 'slateblue',
        width: 70,
        height: 70,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 9,

    },
    buttonText: {
        fontSize: 40,
        color: 'white',
    },
});