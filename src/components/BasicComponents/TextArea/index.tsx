import React from 'react';
import AntdTextArea, { TextAreaProps } from 'antd/es/input/TextArea';
import 'antd/es/input/style/css';

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => <AntdTextArea rows={4} {...props} ref={ref} />,
);

TextArea.displayName = 'TextArea';
export default TextArea;
