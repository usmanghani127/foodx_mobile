import {PLACE_ORDER} from '../common/Types';
import {CallServer, showMessage} from '../common/Utilities';

const PlaceOrder = (payload, dispatch) => {
  dispatch({type: PLACE_ORDER.TRIGGER});
  CallServer({url: PLACE_ORDER.URL, method: 'post', payload})
    .then(() => {
      dispatch({type: PLACE_ORDER.SUCCESS});
      showMessage('Your order has been placed successfully');
    })
    .catch(error => {
      dispatch({type: PLACE_ORDER.FAILURE, error: error.message});
      showMessage(error.message);
    });
};

export default {PlaceOrder};
