import React, {useState, useEffect} from 'react';
import {View, FlatList, Modal, SafeAreaView} from 'react-native';
import styles from './transaction.style';
import Search from '../..//components/Search';
import Button from '../../components/Button';
import List from '../../components/List';
import Radio from '../../components/Radio';
import {parseDateTime} from '../..//utils/helper';
import {ListProps} from '../../flip.interface';

const Transaction = ({navigation}: any) => {
  const [search, setSearch] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('URUTKAN');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch('https://recruitment-test.flip.id/frontend-test')
      .then(res => res.json())
      .then(res => {
        const objValues: any = Object.values(res);
        setData(objValues);
        setFilteredData(objValues);
      });
  };

  const onChangeText = (value: string) => {
    setSearch(value);
    let filteredName = filteredData.filter((item: any) => {
      const query = value.toLocaleLowerCase();
      const amount = item?.amount.toString();

      return (
        item?.beneficiary_name.toLowerCase().match(query) ||
        item?.sender_bank.toLowerCase().match(query) ||
        item?.beneficiary_bank.toLowerCase().match(query) ||
        amount.toLowerCase().match(query)
      );
    });
    setData(filteredName);
  };

  const onFilterPress = () => {
    setIsVisible(true);
  };

  const renderButton = () => (
    <Button title={selectedFilter} onPress={onFilterPress} />
  );

  const onChangeFilter = (value: string) => {
    setSelectedFilter(value);
    setIsVisible(false);
    if (value === 'URUTKAN') {
      getData();
    }
    if (value === 'Nama A-Z') {
      const sort = data.sort((a: any, b: any) =>
        a.beneficiary_name.toLowerCase() > b.beneficiary_name.toLowerCase()
          ? 1
          : -1,
      );
      setData(sort);
    } else if (value === 'Nama Z-A') {
      const sort = data.sort((a: any, b: any) =>
        a.beneficiary_name.toLowerCase() < b.beneficiary_name.toLowerCase()
          ? 1
          : -1,
      );
      setData(sort);
    } else if (value === 'Tanggal Terbaru') {
      const sort = data.sort((a: any, b: any) => {
        var dateA = +parseDateTime(a.created_at) / 1000;
        var dateB = +parseDateTime(b.created_at) / 1000;
        return dateB - dateA;
      });
      setData(sort);
    } else if (value === 'Tanggal Terlama') {
      const sort = data.sort((a: any, b: any) => {
        var dateA = +parseDateTime(a.created_at) / 1000;
        var dateB = +parseDateTime(b.created_at) / 1000;
        return dateA - dateB;
      });
      setData(sort);
    }
  };

  const onListPress = (item: any) => {
    navigation.navigate('DetailTransaction', item);
  };

  const renderItem = ({item}: {item: ListProps}) => {
    return (
      <List
        status={item?.status}
        date={item?.created_at}
        sender_bank={item?.sender_bank}
        beneficiary_bank={item?.beneficiary_bank}
        beneficiary_name={item?.beneficiary_name}
        amount={item?.amount}
        onPress={() => onListPress(item)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Search
        value={search}
        placeholder="Cari nama, bank, atau nominal"
        onChangeText={onChangeText}
        renderButton={renderButton}
      />
      <FlatList
        data={data}
        windowSize={30}
        initialNumToRender={20}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={60}
        renderItem={renderItem}
        keyExtractor={item => item?.id.toString()}
        contentContainerStyle={styles.flatlistContent}
      />
      <Modal
        transparent
        visible={isVisible}
        onRequestClose={() => setIsVisible(!isVisible)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Radio
              value={selectedFilter}
              data={[
                'URUTKAN',
                'Nama A-Z',
                'Nama Z-A',
                'Tanggal Terbaru',
                'Tanggal Terlama',
              ]}
              onChangeValue={value => onChangeFilter(value)}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Transaction;
