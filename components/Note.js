import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';


export default class Note extends Component {
    render() {
        const {keyVal, note} = this.props;
        return (
            <View style={styles.note} key={keyVal} >
                <Text style={styles.noteText}>{note.note}</Text>
                <Text style={styles.noteText}>{note.date}</Text>
                <TouchableOpacity style={styles.delButton} onPress={this.props.deleteNote}>
                    <Text style={styles.buttonText}>D</Text>
                </TouchableOpacity>
            </View>
        );
      }
}

const styles = StyleSheet.create({
    note : {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#ededed',
    },
    noteText : {
        paddingLeft: 20,
        borderLeftWidth: 5,
        borderLeftColor: 'royalblue',
        fontSize: 17,
    },
    delButton : {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightcoral',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10

    },
    buttonText : {
        color: 'fff',
    },
});