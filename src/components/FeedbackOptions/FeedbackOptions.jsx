import PropTypes from 'prop-types';
import { List } from './FeedbackOptions.styled';
import { Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <List>
        {options.map(option => {
          return (
            <li key={option}>
              <Button type="button" name={option} onClick={onLeaveFeedback}>
                {option}
              </Button>
            </li>
          );
        })}
      </List>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
