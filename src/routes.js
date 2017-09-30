import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import HomePage from './components/home/HomePage'
import PraisePage from './components/praise/PraisePage'
import WorshipPage from './components/worship/WorshipPage'
import OthersPage from './components/others/OthersPage'
import Search from './components/admin/search/Search'


export default (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/home" component={HomePage} />
      <Route path="/praise" component={PraisePage} />
      <Route path="/worship" component={WorshipPage} />
      <Route path="/others" component={OthersPage} />
      <Route path="/admin" component={Search} />
      <Route path="*" component={HomePage} />
    </Route>
  );
