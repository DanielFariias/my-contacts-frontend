import PropTypes from 'prop-types';
import Spinner from '../../Spinner';

import { StyledButton } from './styles';

export function Button({
  children,
  isLoading,
  type,
  disabled,
}) {
  return (
    <StyledButton type={type} disabled={disabled || isLoading}>
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}

    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  isLoading: false,
  disabled: false,

};
