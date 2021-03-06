import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Group from './Group';

const styles = theme => ({
  grid: {
    height: '100%',
    width: 'fit-content',
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    flexWrap: 'nowrap',
    overflowY: 'hidden',
  },
});

class Page extends React.Component {

  render() {
    const { classes, config, theme, page, handleChange, haUrl, haConfig, entities } = this.props;

    return (
      <Grid
        container
        className={classes.grid}
        spacing={8}>
        {config.items && config.items.map((group, x) => {
          if (!group.page) group.page = 1;
          return group.page === page.id ? <Group
            key={x}
            theme={theme}
            haUrl={haUrl}
            haConfig={haConfig}
            entities={entities}
            group={group}
            config={config}
            handleChange={handleChange} />
            : null
        })}
      </Grid>
    );
  }
}

Page.propTypes = {
  classes: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  page: PropTypes.object.isRequired,
  haUrl: PropTypes.string.isRequired,
  haConfig: PropTypes.object,
  entities: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(Page);
