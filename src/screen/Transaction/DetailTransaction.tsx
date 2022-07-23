import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {icons} from '../../asset/icons';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';
import {formatCurrency, formatDate} from '../../utils/helper';
import styles from './detail.style';

interface DetailTransactionProps {
  route: any;
}

const DetailTransaction: React.FC<DetailTransactionProps> = ({route}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [copyToClipboard] = useCopyToClipboard();
  const {params} = route;
  return (
    <View style={styles.container}>
      <View style={styles.detailTrx}>
        <View style={styles.row}>
          <Text style={styles.title}>ID Transaksi: </Text>
          <Text style={styles.title}>{params?.id}</Text>
          <TouchableOpacity onPress={() => copyToClipboard(params?.id)}>
            <Image source={icons.ic_copy} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.title}>Detail Transaksi</Text>
        <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
          <Text style={styles.closeButton}>Tutup</Text>
        </TouchableOpacity>
      </View>
      {isVisible && (
        <View style={styles.trxUserContainer}>
          <View style={styles.row}>
            <Text style={styles.title}>{params?.sender_bank}</Text>
            <Text style={styles.title}>&#10132;</Text>
            <Text style={styles.title}>{params?.beneficiary_bank}</Text>
          </View>
          <View style={styles.trxUser}>
            <View style={styles.content}>
              <Text style={styles.title}>{params?.beneficiary_name}</Text>
              <Text style={styles.value}>{params?.account_number}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>NOMINAL</Text>
              <Text style={styles.value}>{formatCurrency(params?.amount)}</Text>
            </View>
          </View>
          <View style={styles.trxUser}>
            <View style={styles.content}>
              <Text style={styles.title}>BERITA TRANSFER</Text>
              <Text style={styles.value}>{params?.remark}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>KODE UNIK</Text>
              <Text style={styles.value}>{params?.unique_code}</Text>
            </View>
          </View>
          <View style={styles.trxUser}>
            <View style={styles.content}>
              <Text style={styles.title}>WAKTU DIBUAT</Text>
              <Text style={styles.value}>{formatDate(params?.created_at)}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default DetailTransaction;
