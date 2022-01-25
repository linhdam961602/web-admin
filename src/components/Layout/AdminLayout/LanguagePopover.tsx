import { useRef, useState } from 'react';
// material
import {
  Box,
  MenuItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';

// components
import MenuPopover from 'components/BasicComponents/MenuPopover';
import useLocales from 'hooks/useLocales';

// ----------------------------------------------------------------------
const TEST_ID = 'langHeader';

export default function LanguagePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { onChangeLang, currentLang, allLang } = useLocales();

  const handleChangeLanguage = (lang: string) => {
    onChangeLang(lang);
    setOpen(false);
  };

  return (
    <>
      <IconButton
        test-id={TEST_ID}
        ref={anchorRef}
        onClick={() => setOpen(true)}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && { bgcolor: 'action.selected' }),
        }}
      >
        <img src={currentLang.icon} alt={currentLang.label} />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={anchorRef.current}
      >
        <Box sx={{ py: 1 }}>
          {allLang.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === currentLang.value}
              onClick={() => handleChangeLanguage(option.value)}
              sx={{ py: 1, px: 2.5 }}
            >
              <ListItemIcon>
                <Box component="img" alt={option.label} src={option.icon} />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
                {option.label}
              </ListItemText>
            </MenuItem>
          ))}
        </Box>
      </MenuPopover>
    </>
  );
}
