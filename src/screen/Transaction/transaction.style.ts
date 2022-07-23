import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  flatlistContent: {
    paddingVertical: 8,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0 ,0.5)',
  },
  modalContent: {
    width: '90%',
    borderRadius: 6,
    backgroundColor: Colors.white,
  },
});

export default styles;
