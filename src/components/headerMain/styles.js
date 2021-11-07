import {StyleSheet} from 'react-native';
import {ScreenWidth} from '../../common/Constants';
import Colors from '../../theme/Colors';

export default StyleSheet.create({
  headView: {
    backgroundColor: Colors.primaryLight,
  },
  body: {
    width: ScreenWidth * 0.7,
    backgroundColor: Colors.white,
    height: 40,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: Colors.primaryDark,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    alignSelf: 'center',
  },
  searchBarInput: {
    flex: 1,
    fontSize: 15,
    color: Colors.description,
  },
  location: {
    backgroundColor: Colors.primaryDark,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
