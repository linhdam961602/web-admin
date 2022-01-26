import React, { useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';

import Typography from 'components/MUIComponent/Typography';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const MAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  boxShadow: 'none !important',
  border: 'none',
  backgroundColor: 'transparent',

  '&:before': {
    backgroundColor: 'transparent',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosIcon sx={{ fontSize: '1rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.grey[600],
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

type MAccordionProps = {
  title: string | React.ReactElement;
  children: React.ReactElement;
  rightContent?: string | React.ReactElement;
};

const Accordion = ({ title, children, rightContent }: MAccordionProps) => {
  const [expanded, setExpanded] = useState<boolean>(true);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <MAccordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary>
        <Typography variant="subtitle2">{title}</Typography>
        {rightContent && <>{rightContent}</>}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </MAccordion>
  );
};

export default Accordion;
