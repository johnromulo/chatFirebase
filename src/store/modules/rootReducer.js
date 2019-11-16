import { combineReducers } from 'redux';

import repositories from './repository/reducer';
import profile from './profile/reducer';
import commits from './commits/reducer';

export default combineReducers({ repositories, profile, commits });
