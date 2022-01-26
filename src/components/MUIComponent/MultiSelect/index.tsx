import React from 'react';
import {
  AutocompleteRenderInputParams,
  AutocompleteRenderOptionState,
  AutocompleteRenderGetTagProps,
} from '@mui/material';

import { SvgIconComponent } from '@mui/icons-material';

import Autocomplete from 'components/MUIComponent/Autocomplete';
import Checkbox from 'components/MUIComponent/Checkbox';
import TextField from 'components/MUIComponent/TextField';
import FormHelperText from 'components/MUIComponent/FormHelperText';
import Chip from 'components/MUIComponent/Chip';
import Avatar from 'components/MUIComponent/Avatar';

import { ColorSchema } from 'types/Palette';

interface ValueSelect {
  label: string;
  value: string;
  avatar?: string;
}

type MultiSelectProps = {
  values?: ValueSelect[];
  options: ValueSelect[];
  onChange?: (value: any[]) => void;
  usingCheckbox?: boolean;
  labelText: string;
  placeholderText?: string;
  helperText?: string;
  error?: boolean;
  hasAvatarTag?: boolean;
  colorTag?: ColorSchema;
  iconTag?: React.ReactElement<SvgIconComponent> | null;
};

function MultiSelect({
  values = [],
  options = [],
  onChange,
  usingCheckbox,
  labelText,
  placeholderText,
  helperText,
  error = false,
  colorTag = 'primary',
  hasAvatarTag = false,
  iconTag = null, // material icon, example: <PeopleAltTwoTone />
}: MultiSelectProps) {
  const handleChange = (
    _e: React.SyntheticEvent<Element, Event>,
    newValues: any[],
  ) => {
    !!onChange && onChange(newValues);
  };

  const renderOption = (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: ValueSelect,
    { selected }: AutocompleteRenderOptionState,
  ) => (
    <li {...props}>
      {usingCheckbox && <Checkbox checked={selected} />}
      {option.label}
    </li>
  );

  const renderInput = (params: AutocompleteRenderInputParams) => (
    <TextField
      {...params}
      label={labelText}
      placeholder={placeholderText}
      error={error}
    />
  );

  const renderTags = (
    tagValue: ValueSelect[],
    getTagProps: AutocompleteRenderGetTagProps,
  ) =>
    tagValue.map((option: ValueSelect, index: number) =>
      hasAvatarTag ? (
        <Chip
          label={option.label}
          avatar={hasAvatarTag ? <Avatar>{option.avatar}</Avatar> : <></>}
          color={colorTag}
          {...getTagProps({ index })}
        />
      ) : (
        <Chip
          label={option.label}
          color={colorTag}
          icon={iconTag || <></>}
          {...getTagProps({ index })}
        />
      ),
    );

  const isOptionEqualToValue = <T extends {}>(option: T, value: T): boolean =>
    !!(JSON.stringify(option) === JSON.stringify(value));

  return (
    <>
      <Autocomplete
        fullWidth
        multiple
        options={options}
        value={values}
        filterSelectedOptions={!usingCheckbox}
        disableCloseOnSelect={usingCheckbox}
        onChange={handleChange}
        renderOption={renderOption}
        renderInput={renderInput}
        renderTags={renderTags}
        isOptionEqualToValue={isOptionEqualToValue}
      />
      {error && (
        <FormHelperText error sx={{ px: 2 }}>
          {helperText}
        </FormHelperText>
      )}
    </>
  );
}

export default MultiSelect;
