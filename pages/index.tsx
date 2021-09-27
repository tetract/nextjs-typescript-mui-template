import { Button, Grid, styled, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { setBoolean } from 'store/slices/example';

import { useAppDispatch, useAppSelector } from '../store/hooks';

const PREFIX = 'Home';

const classes = {
  section__wrapper: `${PREFIX}-section__wrapper`
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')(() => ({
  [`& .${classes.section__wrapper}`]: {}
}));

const Home: React.FC = () => {
  const { t } = useTranslation('home');
  const booleanState = useAppSelector(state => state.client.exampleState.booleanKey);
  const dispatch = useAppDispatch();

  return (
    <Root>
      <main className={classes.section__wrapper}>
        <Grid container justifyContent={'center'}>
          <Grid item xs={12}>
            <Typography variant='h1'>{t('page-heading')}</Typography>
          </Grid>
          <Grid item xs={12} container direction='column' justifyContent='center' sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Button variant='contained' size='large' onClick={() => dispatch(setBoolean(!booleanState))}>
              Toggle
            </Button>
            <Typography variant='h3'>state in redux: {booleanState ? 'true' : 'false'}</Typography>
          </Grid>
        </Grid>
      </main>
    </Root>
  );
};

export default Home;
