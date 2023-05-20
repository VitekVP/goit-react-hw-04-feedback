import PropTypes from 'prop-types';
import { Button, Box } from './FeedbackOptions.styled';

export const FeedbackOptoins = ({ options, onLeaveFeedback }) => {
  return (
    <Box>
      {options.map(option => {
        return (
          <Button
            type="button"
            key={option}
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </Button>
        );
      })}
    </Box>
  );
};

FeedbackOptoins.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
