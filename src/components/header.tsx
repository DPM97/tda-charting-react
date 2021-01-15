import React, { useEffect, useState } from "react";
import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  Search,
  SearchProps,
} from "carbon-components-react";
import { Search20 } from "@carbon/icons-react";

interface Props {
  searchValue: string,
  updateSearchValue: React.Dispatch<React.SetStateAction<string>>
}

// eslint-disable-next-line import/no-anonymous-default-export
export default ({searchValue, updateSearchValue}: Props) => {
  const [showSearch, toggleSearch] = useState(false);
  const [searchProps, editSearchProps] = useState({
    size: "xl",
    light: false,
    disabled: false,
    name: "",
    defaultValue: "",
    labelText: "Search Ticker",
    placeHolderText: "Search Ticker",
  });


  const getSearchBar = () => (
    <div style={{display: "flex"}}>
      <Search {...(searchProps as SearchProps)} onChange={event => updateSearchValue(event.target.value || '')} />
    </div>
  )

  return (
    <>
        <Header aria-label="IBM Platform Name">
          <HeaderName href="#" prefix="Dylan's">
            Stock Checker
          </HeaderName>
          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="Search"
              onClick={() => toggleSearch(!showSearch)}
            >
              <Search20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      {showSearch ? getSearchBar() : ""}
    </>
  );
};
