import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardBase from '../Cards/CardBase';

const styles = () => ({
});

class EditCard extends React.Component {
  state = {
    open: true,
    card: this.props.card
  };

  handleClose = cb => this.setState({ open: false }, cb);

  handleCancel = () => this.handleClose(() => {
    this.props.add ? this.props.handleCardEditDone()
      : this.props.handleCardEditDone();
  });

  handleSave = () => this.handleClose(() => {
    this.props.add ? this.props.handleCardAddDone(this.state.card)
      : this.props.handleCardEditDone(this.state.card);
  });

  render() {
    const { classes, add, config, theme, haUrl, haConfig, entities } = this.props;
    const { open, card } = this.state;

    return (
      <Dialog
        open={open}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{add ? 'Add' : 'Edit'} Card</DialogTitle>
        <Grid container justify="center" spacing={8}>
          <CardBase
            config={config}
            editing
            handleCardEdit={() => null}
            theme={theme}
            haUrl={haUrl}
            haConfig={haConfig}
            entities={entities}
            card={card}
            handleChange={() => null} />
        </Grid>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSave} color="primary">
            {add ? 'Add' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

EditCard.propTypes = {
  classes: PropTypes.object.isRequired,
  card: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  haUrl: PropTypes.string.isRequired,
  haConfig: PropTypes.object,
  entities: PropTypes.array.isRequired,
  add: PropTypes.bool,
  handleCardAddDone: PropTypes.func,
  handleCardEditDone: PropTypes.func
};

export default withStyles(styles)(EditCard);
