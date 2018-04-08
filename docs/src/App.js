
import React from 'react';
import ReactDOM from 'react-dom';

import { InstantSearch, SearchBox, Hits } from 'react-instantsearch/dom';

const App = () => (
  <InstantSearch
    appId="latency"
    apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
    indexName="bestbuy"
  >
    <SearchBox />
    <Hits />
  </InstantSearch>
);

export default App;
