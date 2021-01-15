/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import { getCandle } from '../functions/api'

export default () => {

  const [searchValue, updateSearchValue] = useState('')

  useEffect(() => {
    getCandle(searchValue)
  }, [searchValue])

  return (
    <Header searchValue={ searchValue } updateSearchValue={ updateSearchValue }/>
  );
}

