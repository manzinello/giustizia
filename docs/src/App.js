
import React from 'react';
import ReactDOM from 'react-dom';

import { InstantSearch, SearchBox, Hits } from 'react-instantsearch/dom';

const App = () => (
  <InstantSearch
    appId="2CVZTW5VOB"
    apiKey="a053bf374d1bac46fd8b15c47cb607c3"
    indexName="uffici"
  >
    <SearchBox />
    <Hits />
  </InstantSearch>
);

export default App;