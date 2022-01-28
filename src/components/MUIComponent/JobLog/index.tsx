import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Box from 'components/MUIComponent/Box';
import Dialog from 'components/MUIComponent/Dialog';

type TypeJobLog = {
  isOpen: boolean;
  setOpen: () => void;
  data: string;
};

type TypeJobLogBox = {
  markdown: string;
  width?: number;
};

export const CmdLogBox = ({ markdown, width }: TypeJobLogBox) => (
  <Box
    sx={{
      backgroundColor: '#000',
      color: '#fff',
      padding: '40px 0 10px 10px',
      borderRadius: 1,
      width: width || 'auto',
    }}
  >
    <ReactMarkdown>{markdown}</ReactMarkdown>
  </Box>
);

// TODO: update title later
const JobLogComponent = ({ data, isOpen, setOpen }: TypeJobLog) => (
  <Dialog title={'JobLog'} isOpenDialog={isOpen} onNo={setOpen} maxWidth="sm">
    <CmdLogBox markdown={data} />
  </Dialog>
);

export default JobLogComponent;
