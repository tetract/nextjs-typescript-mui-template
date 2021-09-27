import { styled } from '@mui/material';

const PREFIX = 'Home';

const classes = {
  section__wrapper: `${PREFIX}-section__wrapper`,
  grid: `${PREFIX}-grid`,
  grid__row: `${PREFIX}-grid__row`,
  grid__col: `${PREFIX}-grid__col`,
  video: `${PREFIX}-video`,
  headings__wrapper: `${PREFIX}-headings__wrapper`,
  page__heading: `${PREFIX}-page__heading`,
  page__subheading: `${PREFIX}-page__subheading`,
  cta: `${PREFIX}-cta`,
  button__wrapper: `${PREFIX}-button__wrapper`,
  button: `${PREFIX}-button`
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')(() => ({
  [`& .${classes.section__wrapper}`]: {}
}));

const Home: React.FC = () => {
  return (
    <Root>
      <main className={classes.section__wrapper}>
        <div>aosidj</div>
      </main>
    </Root>
  );
};

export default Home;
