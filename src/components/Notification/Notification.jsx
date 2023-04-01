import PropTypes from 'prop-types';
import { Paragraph } from 'components/Statistics/Statistics.styled';
export default function Notification({ message }) {
  return <Paragraph>{message}</Paragraph>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
