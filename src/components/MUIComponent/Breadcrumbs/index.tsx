import { forwardRef, ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MBreadcrumbs, { BreadcrumbsProps } from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from 'components/MUIComponent/Box';
import Typography from 'components/MUIComponent/Typography';
// ----------------------------------------------------------------------

const Separator = (
  <Box
    component="span"
    sx={{
      width: 4,
      height: 4,
      borderRadius: '50%',
      bgcolor: 'text.disabled',
    }}
  />
);

export type TLink = {
  href?: string;
  name: string;
  icon?: ReactElement;
};

function LinkItem({ link }: { link: TLink }) {
  const { href, name, icon } = link;
  return (
    <Link
      key={name}
      variant="body2"
      component={RouterLink}
      to={href || '#'}
      sx={{
        lineHeight: 2,
        display: 'flex',
        alignItems: 'center',
        color: 'text.disabled',
        textOverflow: 'ellipsis',
        textDecoration: 'none',
        '& > div': { display: 'inherit' },
      }}
    >
      {icon && (
        <Box
          sx={{
            mr: 1,
            '& svg': { width: 20, height: 20 },
          }}
        >
          {icon}
        </Box>
      )}
      {name}
    </Link>
  );
}

export interface MBreadcrumbsProps extends BreadcrumbsProps {
  links: TLink[];
}

const Breadcrumbs = forwardRef<any, MBreadcrumbsProps>(
  ({ links, ...other }: MBreadcrumbsProps, ref) => (
    <MBreadcrumbs ref={ref} separator={Separator} {...other}>
      {links.map((link) =>
        link.href ? (
          <LinkItem key={link.name} link={link} />
        ) : (
          <Typography
            key={link.name}
            variant="body2"
            sx={{
              maxWidth: 260,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              color: 'text.disabled',
              textOverflow: 'ellipsis',
            }}
          >
            {link.name}
          </Typography>
        ),
      )}
    </MBreadcrumbs>
  ),
);

Breadcrumbs.displayName = 'Breadcrumbs';
export default Breadcrumbs;
