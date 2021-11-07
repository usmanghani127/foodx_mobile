import {RouteKeys} from '../common/Constants';
import {LOGIN, LOGOUT} from '../common/Types';
import {CallServer, showMessage} from '../common/Utilities';

const Login = (payload, dispatch, navigation) => {
  dispatch({type: LOGIN.TRIGGER});
  CallServer({url: LOGIN.URL, method: 'post', payload})
    .then(data => {
      dispatch({type: LOGIN.SUCCESS, data});
      navigation.replace(RouteKeys.DRAWER);
    })
    .catch(error => {
      dispatch({type: LOGIN.FAILURE, error: error.message});
      showMessage(error.message);
    });
};

const Logout = (dispatch, navigation) => {
  dispatch({type: LOGOUT.TRIGGER});
  dispatch({type: LOGOUT.SUCCESS});
  navigation.reset({
    routes: [{name: RouteKeys.LOGIN, params: {showBackButton: false}}],
  });
};

export default {Login, Logout};
