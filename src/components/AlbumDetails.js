import React from 'react';
import { Text, StyleSheet, Image, View, TouchableHighlight, Linking} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const styles = StyleSheet.create({
  headerContent: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  textStyle: {
    fontSize: 25
  }
});

const AlbumDetails = ( {album} ) => {
  const {thumbnail_image, artist, title, image, url } = album;
  const { headerContent, textStyle} = styles;
  let onImagePress = () => Linking.openURL(url);
  return (
    <Card>
      <CardSection>
        <View>
          <Image source={{uri: thumbnail_image}} style={ {width: 50, height: 50}}/>
        </View>
        <View style={headerContent}>
          <Text > {artist} </Text>
          <Text style={textStyle}> {title} </Text>
        </View>
      </CardSection>
      <CardSection>
         <TouchableHighlight onPress={onImagePress}>
           <Image source ={ {uri: image } } style={{width: 365, height: 365}}/>
         </TouchableHighlight>
      </CardSection>
    </Card>
  );
}

export default AlbumDetails;
