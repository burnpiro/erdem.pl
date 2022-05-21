import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LinearProgress from '@material-ui/core/LinearProgress';
import InputAdornment from '@material-ui/core/InputAdornment';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { useFlexSearch } from 'react-use-flexsearch';

import SearchIcon from './search_black_24dp.svg';
import ArticleIcon from './article_black_24dp.svg';
import WebIcon from './web_black_24dp.svg';
import ClearIcon from './clear_black_24dp.svg';

import styles from './Search.module.scss';
import { format, parse } from 'date-fns';

type Props = {};

const SearchResults = ({ query, store, index }) => {
  const results = useFlexSearch(query, index, store, 6);

  const handleItemClick = e => {
    const selectedResult = results.find(el => el.id === e.currentTarget.id);
    if (selectedResult != null) {
      window.location.href = selectedResult.slug;
    }
  };

  return (
    <List>
      {results.map(result => (
        <React.Fragment key={result.id}>
          <ListItem
            button
            onClick={handleItemClick}
            key={result.id}
            id={result.id}
          >
            <ListItemIcon>
              {result.template === 'page' && (
                <img src={WebIcon} className={styles['search__item__icon']} />
              )}
              {result.template !== 'page' && (
                <img
                  src={ArticleIcon}
                  className={styles['search__item__icon']}
                />
              )}
            </ListItemIcon>
            <ListItemText
              primary={result.title}
              secondary={
                <React.Fragment>
                  <span>{result.description}</span>
                  <br />
                  <span>
                    {format(
                      parse(result.date, 'yyyy-MM-dd', new Date()),
                      'd MMM, yyyy'
                    )}
                  </span>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};

const Search = () => {
  const searchData = useStaticQuery(graphql`
    query Search {
      localSearchPosts {
        publicIndexURL
        publicStoreURL
      }
    }
  `);
  const [query, setQuery] = useState('');
  const [searchIndex, setSearchIndex] = useState(null);
  const [searchStore, setSearchStore] = useState(null);

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const clearQuery = () => {
    setQuery('');
  };

  useEffect(() => {
    if (query.length > 0 && (searchIndex == null || searchStore == null)) {
      // eslint-disable-next-line no-inner-declarations
      async function fetchData() {
        const queries = await Promise.all([
          fetch(searchData.localSearchPosts.publicIndexURL),
          fetch(searchData.localSearchPosts.publicStoreURL),
        ]);
        setSearchIndex(await queries[0].text());
        setSearchStore(await queries[1].json());
      }
      fetchData();
    }
  }, [query.length > 0]);

  return (
    <Grid
      container
      spacing={1}
      alignItems="flex-end"
      className={styles['search__container']}
    >
      <Grid item>
        <img src={SearchIcon} alt={'search icon'} />
      </Grid>
      <Grid item xs>
        <form noValidate autoComplete="off" className={styles['search__form']}>
          <TextField
            fullWidth
            id="searchText"
            label="Seach for articles..."
            onChange={handleInputChange}
            value={query}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="clear search"
                    onClick={clearQuery}
                    onMouseDown={clearQuery}
                  >
                    <img src={ClearIcon} style={{ width: '18px' }} alt={'clear search'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </Grid>
      <Grid item xs={12}>
        {(searchIndex == null || searchStore == null) && query.length > 0 && (
          <LinearProgress />
        )}
        {searchIndex != null && searchStore != null && query.length > 0 && (
          <SearchResults
            query={query}
            store={searchStore}
            index={searchIndex}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Search;
