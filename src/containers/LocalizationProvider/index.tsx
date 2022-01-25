import MLocalizationProvider, {
  LocalizationProviderProps,
} from '@mui/lab/LocalizationProvider';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import dayjs from 'dayjs';
export type MLocalizationProviderProps = Omit<
  LocalizationProviderProps,
  'dateAdapter'
>;

const LocalizationProvider = ({
  dateLibInstance = dayjs,
  ...otherProps
}: MLocalizationProviderProps) => (
  <MLocalizationProvider
    dateLibInstance={dateLibInstance}
    dateAdapter={AdapterDayjs}
    {...otherProps}
  />
);

export default LocalizationProvider;
