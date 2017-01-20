import React from 'react';
import { Image , Text, View} from 'react-native';

const styles = {
  viewStyle: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.5,
    marginTop: 10,
    backgroundColor: 'white'
  }
}

const Card = (props) => {
  return (
    <View style={styles.viewStyle}>
      {props.children}
    </View>
  );
}

export default Card;
