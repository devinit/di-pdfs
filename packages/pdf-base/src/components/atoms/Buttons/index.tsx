import * as React from 'react';
import { Button } from 'semantic-ui-react';

interface IProps {
  children?: React.ReactChild;
  content?: string;
  primary?: boolean;
  secondary?: boolean;
  extra?: any;
}

const button = ({ children, content, primary, secondary }: IProps) =>
  (<Button primary={primary} secondary={secondary} >
    {' '}{children || content}{' '}
  </Button>);

export default button;
