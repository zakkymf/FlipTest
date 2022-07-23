import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  detailTrx: {
    padding: 16,
    marginTop: 5,
    backgroundColor: Colors.white,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 15,
    height: 15,
    marginLeft: 5,
    tintColor: Colors.orange,
  },
  rowBetween: {
    padding: 16,
    marginTop: 2,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  trxUserContainer: {
    padding: 16,
    backgroundColor: Colors.white,
  },
  trxUser: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    width: '50%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  value: {
    fontSize: 14,
    color: Colors.black,
  },
  closeButton: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.orange,
  },
});

export default styles;
