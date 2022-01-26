import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
import { Theme } from '@mui/material/styles';
import { useTheme } from '@mui/material';
import { RootStyle, ToolbarStyle } from '../styled';

// components
import LanguagePopover from './LanguagePopover';
import AccountPopover from './AccountPopover';
import Notifications from './Notifications';
import Typography from 'components/MUIComponent/Typography';
import IconButton from 'components/MUIComponent/IconButton';
import Stack from 'components/MUIComponent/Stack';
import Box from 'components/MUIComponent/Box';

// ----------------------------------------------------------------------

type DashboardNavbarProps = {
  onOpenSidebar: any;
  isExpandMenu: boolean;
};

export default function DashboardNavbar({
  onOpenSidebar,
  isExpandMenu,
}: DashboardNavbarProps) {
  const theme = useTheme<Theme>();

  return (
    <RootStyle theme={theme} styleProps={{ isExpandMenu }}>
      <ToolbarStyle>
        <IconButton
          onClick={onOpenSidebar}
          sx={{ mr: 1, color: 'text.primary' }}
        >
          <Icon icon={menu2Fill} />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            noWrap
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Header
          </Typography>
        </Box>
        <Stack direction="row" spacing={{ xs: 0.5, sm: 1.5 }}>
          <LanguagePopover />
          <Notifications />
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
