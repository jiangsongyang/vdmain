import type { DropdownOption, MenuOption } from 'naive-ui';
import { useUserStore } from '@/store';
type DropDownOptions = DropdownOption[];

type OptionsMap = {
  [key: string]: MenuOption;
};

const OPTIONS_MAP: OptionsMap = {
  LOGOUT: { label: '退出登陆', key: 'logout' },
};

const defaultDropDownOptions: DropDownOptions = [
  {
    label: OPTIONS_MAP.LOGOUT.label,
    key: OPTIONS_MAP.LOGOUT.key,
  },
];

// merge some options from request authority API
const createDropDownOptions = () => defaultDropDownOptions;

export const useDropDown = () => {
  const userStore = useUserStore();

  const dropDownOptions = createDropDownOptions();

  const handleSelect = (key: string) => {
    switch (key) {
      case OPTIONS_MAP.LOGOUT.key:
        userStore.logout();
        break;
      default:
        break;
    }
  };

  return {
    dropDownOptions,
    handleSelect,
  };
};
