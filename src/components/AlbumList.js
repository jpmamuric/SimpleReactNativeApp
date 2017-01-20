import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import axios from 'axios';

import AlbumDetails from './AlbumDetails';

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: 'white'
  },
  loadingStyle: {
    width: 360,
    height: 360,
    marginTop: 20,
    borderRadius: 180,
    padding: 0
  },
  textStyle: {
    fontSize: 50,
    paddingBottom: 10
  }
});

class AlbumList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      albums: [],
      loading: true
    };
  }

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then( res => {
        if(res.status === 200) {
          this.setState({ albums: res.data });
          /*
          $realistic
            this.setState({ loading: false})
          */

          // $simulates low latency or poor internet
          setTimeout(() => {
            this.simulateTimePassed();
          }, 1500);
        }
      });
  }

  simulateTimePassed() {
    this.setState({ loading: false });
  }

  renderAlbums() {
    return this.state.albums.map((album, i) => {
      return <AlbumDetails album={album} key={i}/>;
    })
  }

  render(){
    const { viewStyle, textStyle, loadingStyle} = styles;
    if(this.state.loading === true) {
      return (
        <View style={viewStyle}>
          <Image source={require('../assets/stitch.gif')} style={loadingStyle} />
          <Text style={textStyle}> Loading ... </Text>
        </View>
      );
    } else {
      return (
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
      );
    }
  }
}

export default AlbumList;
