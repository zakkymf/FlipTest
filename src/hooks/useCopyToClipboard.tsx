import React from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import {Alert, Platform, ToastAndroid} from 'react-native';

const useCopyToClipboard = () => {
  const copyToClipboard = (text: string) => {
    Clipboard.setString(text);
    if (Platform.OS == 'ios') {
      Alert.alert('ID Transaksi berhasil disalin');
    } else {
      ToastAndroid.show('ID Transaksi berhasil disalin', ToastAndroid.SHORT);
    }
  };

  return [copyToClipboard];
};

export default useCopyToClipboard;
