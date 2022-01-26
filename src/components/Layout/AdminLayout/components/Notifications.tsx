import { useRef, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import bellFill from '@iconify/icons-eva/bell-fill';
import { Icon } from '@iconify/react';
import Box from 'components/MUIComponent/Box';
import Typography from 'components/MUIComponent/Typography';
import MenuItem from 'components/MUIComponent/MenuItem';
import useLocales from 'hooks/useLocales';
import MenuPopover from 'components/MUIComponent/MenuPopover';
import IconButton from 'components/MUIComponent/IconButton';

const NumNotificationStyled = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: theme.typography.pxToRem(-3),
  right: theme.typography.pxToRem(-3),
  width: theme.typography.pxToRem(25),
  height: theme.typography.pxToRem(25),
  borderRadius: '50%',
  backgroundColor: theme.palette.error.main,
  fontSize: theme.typography.pxToRem(12),
  color: '#ffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const FlexBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const WrapperTime = styled('span')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const WrapperFooter = styled(FlexBox)(({ theme }) => ({
  padding: `${theme.typography.pxToRem(20)} ${theme.typography.pxToRem(30)}`,
}));

const WrapperHeader = styled(FlexBox)(({ theme }) => ({
  padding: `${theme.typography.pxToRem(20)}`,
}));

const TEST_ID = 'notifications';

export default function Notifications() {
  const notificationRef = useRef(null);
  const { t, currentLang } = useLocales();
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        test-type={TEST_ID}
        ref={notificationRef}
        onClick={() => setOpen(true)}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
        }}
      >
        <Icon icon={bellFill} />
        <NumNotificationStyled>9</NumNotificationStyled>
      </IconButton>

      <MenuPopover
        sx={{ width: 360 }}
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={notificationRef.current}
      >
        <Box>
          <WrapperHeader>
            <Box>
              <Typography variant="h6">
                {' '}
                {t('topbar.notifications.title')}
              </Typography>
              <Typography color="textSecondary">
                You have 4 unread messages
              </Typography>
            </Box>
          </WrapperHeader>

          <WrapperFooter>
            <Typography color="primary" variant="subtitle1">
              {t('topbar.notifications.seeUnread')}
            </Typography>
            <Typography color="primary" variant="subtitle1">
              {t('topbar.notifications.seeAll')}
            </Typography>
          </WrapperFooter>
        </Box>
      </MenuPopover>
    </>
  );
}
