import {GET_FEATURED_FOOD} from '../common/Types';
import {CallServer, showMessage} from '../common/Utilities';

const GetFeaturedFood = dispatch => {
  dispatch({type: GET_FEATURED_FOOD.TRIGGER});
  CallServer({url: GET_FEATURED_FOOD.URL, method: 'get'})
    .then(data => {
      dispatch({type: GET_FEATURED_FOOD.SUCCESS, data});
    })
    .catch(error => {
      dispatch({type: GET_FEATURED_FOOD.FAILURE, error: error.message});
      showMessage(error.message);
    });
};

export default {GetFeaturedFood};
