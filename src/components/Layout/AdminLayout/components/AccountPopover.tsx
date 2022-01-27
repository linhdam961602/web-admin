import { Link as RouterLink } from 'react-router-dom';
import { useRef, useState } from 'react';
// icon
import { Icon } from '@iconify/react';
import personFill from '@iconify/icons-eva/person-fill';
// material
import { alpha } from '@mui/material/styles';
import { Box, MenuItem } from '@mui/material';
// service
import useLocales from 'hooks/useLocales';
// components
import MenuPopover from 'components/MUIComponent/MenuPopover';
import Avatar from 'components/MUIComponent/Avatar';
import Button from 'components/MUIComponent/Button';
import Typography from 'components/MUIComponent/Typography';
import IconButton from 'components/MUIComponent/IconButton';
import Divider from 'components/MUIComponent/Divider';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const TEST_ID = 'accountHeader';

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { t } = useLocales();

  const MENU_OPTIONS = [
    {
      label: t('topbar.account.profile'),
      icon: personFill,
      linkTo: '/profile',
    },
  ];

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onLogout = () => {
    // TODO: Call redux action to logout
    // dispatch(authActions.logout({ navigate }));
  };

  //  TODO: Get userProfile from state
  // const userProfile = useSelector(
  //   (state) => get(state, [authSliceName, 'userInfo', 'corpUserInfo'], {}),
  //   shallowEqual,
  // );
  const userProfile = { avatarUrl: '', name: '', email: '' };

  return (
    <>
      <IconButton
        test-id={TEST_ID}
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            },
          }),
        }}
      >
        <Avatar alt="My Avatar" src={userProfile.avatarUrl} />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {userProfile.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {userProfile.email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Box
              component={Icon}
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24,
              }}
            />

            {option.label}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button
            fullWidth
            color="inherit"
            variant="outlined"
            onClick={onLogout}
          >
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
