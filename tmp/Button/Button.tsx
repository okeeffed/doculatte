import * as React from 'react';
import GenericButton, { ButtonProps } from './components/GenericButton';

/**
 * Generic button to do things
 *
 * @param {*} props To do stuff
 */
const Button: React.FunctionComponent<ButtonProps> = (props) => (
  <GenericButton {...props} />
);

/**
 * Default props
 *
 * @var {boolean} fullWidth Set button to be full width
 */
Button.defaultProps = {
  fullWidth: false,
  form: false,
  primary: false,
  secondary: false,
  destructive: false,
  disabled: false,
  reversed: false,
  iconPosition: 'start',
  newTabAndIUnderstandTheAccessibilityImplications: false
};

Button.displayName = 'Button';

export default Button;
