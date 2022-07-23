import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../theme/Colors';
import {formatCurrency, formatDate, statusTransaction} from '../utils/helper';

interface ListProps {
  status: string;
  sender_bank: string;
  beneficiary_bank: string;
  beneficiary_name: string;
  amount: number;
  date: string;
  onPress: () => void;
}

const List: React.FC<ListProps> = ({
  status,
  sender_bank,
  beneficiary_bank,
  beneficiary_name,
  amount,
  date,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View
        style={[
          styles.status,
          {
            backgroundColor: statusTransaction(status)?.color,
          },
        ]}
      />
      <View style={styles.content}>
        <View>
          <View style={styles.row}>
            <Text style={styles.textBank}>{sender_bank}</Text>
            <Text style={styles.symbol}>&#10132;</Text>
            <Text style={styles.textBank}>{beneficiary_bank}</Text>
          </View>
          <Text style={styles.transaction}>{beneficiary_name}</Text>
          <View style={styles.row}>
            <Text style={styles.transaction}>{formatCurrency(amount)}</Text>
            <Text style={styles.symbol}>&#x25CF;</Text>
            <Text style={styles.transaction}>{formatDate(date)}</Text>
          </View>
        </View>
        <View
          style={
            status === 'PENDING'
              ? styles.pendingStatus
              : [
                  styles.statusTransaction,
                  {backgroundColor: statusTransaction(status)?.color},
                ]
          }>
          <Text
            style={[
              styles.textStatus,
              {color: status === 'PENDING' ? Colors.black : Colors.white},
            ]}>
            {statusTransaction(status)?.label}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const isEqual = (prevProps: any, nextProps: any) => {
  const {id} = nextProps;
  const {id: prevName} = prevProps;

  const selectedId = id === prevName;

  return selectedId;
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: Colors.white,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  status: {
    width: 8,
    height: '100%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  statusTransaction: {
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  pendingStatus: {
    borderWidth: 1.5,
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderColor: Colors.orange,
  },
  textStatus: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  textBank: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  transaction: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black,
  },
  symbol: {
    fontSize: 16,
    marginHorizontal: 2,
    color: Colors.black,
  },
});

export default React.memo(List, isEqual);
