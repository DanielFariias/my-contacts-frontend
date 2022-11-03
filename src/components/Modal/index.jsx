import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { Container, Footer, Overlay } from './styles';
import { Button } from '../shared/Button';

export function Modal({ danger }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Titulo do Modal</h1>
        <p>Corpo do Modal</p>
        <Footer>
          <button type="button" className="cancel-button">Cancelar</button>
          <Button danger={danger}>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  // visible: PropTypes.bool.isRequired,
  // title: PropTypes.string.isRequired,
  // isLoading: PropTypes.bool,
  // children: PropTypes.node.isRequired,
  // cancelLabel: PropTypes.string,
  // confirmLabel: PropTypes.string,
  // onCancel: PropTypes.func.isRequired,
  // onConfirm: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  danger: false,
  // isLoading: false,
  // cancelLabel: 'Cancel',
  // confirmLabel: 'Confirm',
};
