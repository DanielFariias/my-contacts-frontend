import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { Arrow } from '../../assets/images/icons/Arrow';

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <Arrow />
        <span>Back</span>
      </Link>
      <h1>{ title }</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
