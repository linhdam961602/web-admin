/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages
 */
import React, { ReactNode, useEffect } from 'react';
import { useAppSelector } from 'store/hooks';
import { createIntl, createIntlCache, IntlProvider } from 'react-intl';
import { selectors } from './slices';
import { translationMessages, DEFAULT_LOCALE } from 'i18n';
import dayjs from 'dayjs';
import * as auth from 'containers/Auth/helpers';

dayjs.locale(DEFAULT_LOCALE);
export let intl = createIntl(
  {
    locale: auth.getLanguage(),
    messages: translationMessages[DEFAULT_LOCALE],
  },
  createIntlCache(),
);

interface LanguageProviderProps {
  children: ReactNode;
  messages: any;
}

export function LanguageProvider({
  messages,
  children,
}: LanguageProviderProps) {
  const locale = useAppSelector(selectors.languageSelected);

  useEffect(() => {
    if (!messages) return;

    // This is optional but highly recommended
    // since it prevents memory leak
    const cache = createIntlCache();
    intl = createIntl(
      {
        locale: locale,
        messages: messages[locale],
      },
      cache,
    );
    dayjs.locale(locale);
  }, [locale, messages]);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {React.Children.only(children)}
    </IntlProvider>
  );
}

export default LanguageProvider;
