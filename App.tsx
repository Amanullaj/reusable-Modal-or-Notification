import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'
import ReusableModal from './ReusableModal'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {     
      modalVisible: false,
    };
  }

closeModal = () => {
  this.setState({ modalVisible: false });
};

openModal = () => {
  this.setState({ modalVisible: true });
};
  render() {
    const { modalVisible } = this.state;
    return (
      <View style={{flex:1, alignItems : 'center', justifyContent : 'center',}}>
        <Button title={"buttonText"} onPress={this.openModal}/>
         <ReusableModal
          color='green'
          visible={modalVisible}
          closeModal={this.closeModal}
          title={'Success'}
          body={'Your message succesful'}
          buttonText={"OK"}
          image={require('../reusablemodal/images/check-mark.png')}
        />
      </View>
    )
  }
}

export default App