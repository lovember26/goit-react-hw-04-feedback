import PropTypes from 'prop-types';
import { Item } from './Section.styled';
import { Title } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <>
      <Item>
        <Title>{title}</Title>
        {children}
      </Item>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
