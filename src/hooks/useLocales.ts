import dayjs from 'dayjs';
import { useIntl } from 'react-intl';
import { LANGS } from 'constants/common';

// utils
const getDefaultLang = 'ko';

// ----------------------------------------------------------------------

export type LocalizationKey = 'ko' | 'en';

export default function useLocales() {
  const intl = useIntl();
  const t = (id: string) => intl.formatMessage({ id });

  const currentLang =
    LANGS.find((_lang) => _lang.value === getDefaultLang) || LANGS[0];

  const handleChangeLanguage = (newlang: string) => {
    intl.locale = newlang;
    dayjs.locale(newlang); // Update dayjs locale
  };

  return {
    t,
    onChangeLang: handleChangeLanguage,
    currentLang,
    allLang: LANGS,
  };
}
