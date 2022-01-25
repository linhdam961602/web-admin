import React from 'react';
import { makeStyles } from '@mui/styles';

import Input from 'components/MUIComponent/Input';
import Button from 'components/MUIComponent/Button';
import Checkbox from 'components/MUIComponent/Checkbox';
import Switch from 'components/MUIComponent/Switch';
import Chip from 'components/MUIComponent/Chip';
import Badge from 'components/MUIComponent/Badge';
import Select from 'components/MUIComponent/Select';
import Radio from 'components/MUIComponent/Radio';
import FormControl from 'components/MUIComponent/FormControl';
import InputLabel from 'components/MUIComponent/InputLabel';
import MenuItem from 'components/MUIComponent/MenuItem';

const useStyles = makeStyles(() => ({
  inputLabel: {
    '& .MuiInputLabel-shrink': {
      fontSize: '1rem',
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <div style={{ marginLeft: '10px' }}>
      <Input
        variant="outlined"
        margin="normal"
        required
        autoComplete="userName"
        label={'Username'}
        className={classes.inputLabel}
      />
      <Button variant="contained" color="primary">
        test
      </Button>
      <Checkbox />
      <Switch />
      <Chip label="aa" />
      <Badge badgeContent="11" color="primary"></Badge>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          label="Age"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Radio />
    </div>
  );
};

export default HomePage;
