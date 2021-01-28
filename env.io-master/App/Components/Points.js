import React from 'react';
import { StyleSheet, 
  Text, 
} from 'react-native';

export default class Points extends React.Component {
    
    state = {
        points: '',
    }

    render() {
        return(
            <Text>{this.state.points}</Text>
        );
    }
}