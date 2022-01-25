import React from 'react';

import { FormattedMessage } from 'react-intl';

import {
  PreloadingStyled,
  CircleLoadingStyled,
  TextInfoStyled,
} from './styled';

interface Preloading {
  text?: string;
  className?: string;
}

function Preloading({ text, className }: Preloading) {
  return (
    <PreloadingStyled className={className || ''}>
      <CircleLoadingStyled />
      <TextInfoStyled>
        {text || <FormattedMessage id="common.label.loading" />}...
      </TextInfoStyled>
    </PreloadingStyled>
  );
}

export default Preloading;
