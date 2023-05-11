import dayjs from 'dayjs';
import { useIntl } from 'react-intl';
import { LANGS } from 'constants/common';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import * as authHelper from 'containers/Auth/helpers';

import { reducerActions, selectors } from 'containers/LanguageProvider/slices';

// ----------------------------------------------------------------------

export type LocalizationKey = 'vi' | 'en';

export default function useLocales() {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  const locale = useAppSelector(selectors.languageSelected);
  const t = (id: string, values?: Record<string, string>) => {
    if (values) {
      Object.keys(values).forEach(function (key) {
        const isId = values[key]?.indexOf?.('.');
        values[key] =
          isId !== -1 ? intl.formatMessage({ id: values[key] }) : values[key];
      });
      return intl.formatMessage({ id }, values);
    }
    return intl.formatMessage({ id });
  };

  const currentLang = LANGS.find((_lang) => _lang.value === locale) || LANGS[0];

  const handleChangeLanguage = (newlang: string) => {
    intl.locale = newlang;
    dayjs.locale(newlang); // Update dayjs locale
    dispatch(reducerActions.changeLanguage(newlang));
    authHelper.setLanguage(newlang);
  };

  return {
    t,
    onChangeLang: handleChangeLanguage,
    currentLang,
    allLang: LANGS,
  };
}
