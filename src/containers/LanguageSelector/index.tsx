import Dropdown from 'components/BasicComponents/Dropdown';
interface LanguageSelectorProps {
  onChange: (value: any) => void;
  menu: any;
}
const LanguageSelector = (props: LanguageSelectorProps) => {
  const onChangeLang = (value: any) => {
    props.onChange(value.key);
  };

  return <Dropdown overlay={props.menu} onVisibleChange={onChangeLang} />;
};

export default LanguageSelector;
