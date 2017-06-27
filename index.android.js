/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default class ZSAppv1 extends Component {
  render() {
    return (
      <ScrollableTabView
      style={{flex:1, tabBarActiveTextColor:"green"}}
      renderTabBar={() => <DefaultTabBar />}
    >
      <WebView tabLabel='Bulletin' source={{uri:'http://www.zionserangoon.org.sg/weekly-bulletins/2msbulletin/'}} style={{flex:1, }}/>
      <WebView tabLabel='Prayer Wall' source={{uri:'http://www.zionserangoon.org.sg/prayer-wall/'}} style={{flex:1, }}/>
      <WebView tabLabel='Book Now' source={{uri:'http://www.zionserangoon.org.sg/book-now/'}} style={{flex:1, }}/>
    </ScrollableTabView>
    );
  }
}

AppRegistry.registerComponent('ZSAppv1', () => ZSAppv1);
