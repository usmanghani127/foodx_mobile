import {useEffect, useRef} from 'react';
import {RouteKeys} from '../common/Constants';
import {useUser} from '../context/user';
import {isEmpty} from 'lodash';

const Initializing = ({navigation}) => {
  const {state: {user = {}} = {}} = useUser();
  const time = useRef(null);

  useEffect(() => {
    clearTimeout(time.current);
    time.current = setTimeout(() => {
      navigation.replace(isEmpty(user) ? RouteKeys.LOGIN : RouteKeys.DRAWER, {
        showBackButton: false,
      });
      // SplashScreen.hide();
    }, 2000);
  }, [user]);

  return null;
};

export default Initializing;
