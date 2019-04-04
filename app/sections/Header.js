import  React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {isLoggedIn:false};
  }

  toggleUser = ()=>{
    this.setState(previousState =>{
      return{isLoggedIn: !previousState.isLoggedIn}
    })
  }

  render(){
    let display = this.state.isLoggedIn ? 'Sample User': this.props.message;

    return(
      <View style={styles.headStyle}>
        <Text style={styles.headText} onPress={this.toggleUser}>{display}</Text>
      </View>

    );
  }
}


const styles = StyleSheet.create({
    headText: {
      textAlign: 'right',
      color: '#ffffff',
      fontSize:20,
    },
    headStyle: {
      paddingTop:30,
      paddingBottom:10,
      paddingRight:10,
      backgroundColor:'#35605a',
    }
});
