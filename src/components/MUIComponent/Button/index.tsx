import { forwardRef } from 'react';
// material
import {
  alpha,
  Theme,
  experimentalStyled as styled,
} from '@mui/material/styles';
import { useTheme } from '@mui/material';
import MButton, { ButtonProps } from '@mui/material/Button';
// @types
import { ColorSchema } from 'types/Palette';

// ----------------------------------------------------------------------

declare module '@mui/material/Button/Button' {
  interface ButtonPropsColorOverrides {
    info: true;
    success: true;
    warning: true;
    error: true;
  }
}

type ButtonColor = 'info' | 'success' | 'warning' | 'error';
type ButtonVariant = 'contained' | 'outlined' | 'text';

const ButtonStyle = styled(MButton)(
  ({
    theme,
    styleProps,
  }: {
    theme: Theme;
    styleProps: {
      color: ButtonColor;
      variant: ButtonVariant;
    };
  }) => {
    const { color, variant } = styleProps;

    const styleContained = (color: ColorSchema) => ({
      boxShadow: theme.customShadows[color],
      color: theme.palette[color].contrastText,
      backgroundColor: theme.palette[color].main,
      '&:hover': {
        backgroundColor: theme.palette[color].dark,
      },
    });

    const styleOutlined = (color: ColorSchema) => ({
      color: theme.palette[color].main,
      border: `1px solid ${alpha(theme.palette[color].main, 0.48)}`,
      '&:hover': {
        border: `1px solid ${theme.palette[color].main}`,
        backgroundColor: alpha(
          theme.palette[color].main,
          theme.palette.action.hoverOpacity,
        ),
      },
    });

    const styleText = (color: ColorSchema) => ({
      color: theme.palette[color].main,
      '&:hover': {
        backgroundColor: alpha(
          theme.palette[color].main,
          theme.palette.action.hoverOpacity,
        ),
      },
    });

    return {
      ...(variant === 'contained' && { ...styleContained(color) }),
      ...(variant === 'outlined' && { ...styleOutlined(color) }),
      ...(variant === 'text' && { ...styleText(color) }),
    };
  },
);

// ----------------------------------------------------------------------

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color = 'primary', variant = 'text', children, ...other }, ref) => {
    const theme = useTheme<Theme>();

    if (color === 'inherit' || color === 'primary' || color === 'secondary') {
      return (
        <MButton ref={ref} color={color} variant={variant} {...other}>
          {children}
        </MButton>
      );
    }

    return (
      <ButtonStyle
        ref={ref}
        variant={variant}
        styleProps={{ color, variant }}
        theme={theme}
        {...other}
      >
        {children}
      </ButtonStyle>
    );
  },
);

Button.displayName = 'Button';

export default Button;
