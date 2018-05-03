import * as React from "react";
import { Header } from '../components/header';
import { SiteName } from '../components/site-name';
import { SearchField } from '../components/search-field';
import { SearchControls } from '../components/search-controls';
import { SubHeader } from '../components/sub-header';
import './search.scss';

export class SearchLayout extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header>
          <div className="search-container">
            <SiteName />
            <h1 className="search-header">Find your movie</h1>
            <SearchField />
            <SearchControls />
          </div>
        </Header>
        <SubHeader>
          SubHeader
        </SubHeader>
      </React.Fragment>
    );
  }
}
