import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter,Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import CampaignsIndex from './components/campaigns_index.js';
import CampaignNew from './components/campaign_new.js';
import CampaignShow from './components/campaign_show.js';
import FramesIndex from './components/frames_index.js';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/campaigns/new" component={CampaignNew}/>
          <Route path="/campaigns/:id" component={CampaignShow}/>
          <Route path="/frames" component={FramesIndex}/>
          <Route path="/" component={CampaignsIndex}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
