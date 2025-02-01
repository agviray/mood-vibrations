import PropTypes from 'prop-types';
import {
  StyledUserQuickOptions,
  StyledUserOption,
} from './styles/UserQuickOptions.styled';

const options = [
  { text: 'excited' },
  { text: 'chill' },
  { text: 'energetic' },
  { text: 'studious' },
  { text: 'romantic' },
  { text: 'confused' },
  { text: 'mysterious' },
  { text: 'happy' },
  { text: 'daring' },
  { text: 'melancholic' },
  { text: 'sneaky' },
  { text: 'hopeful' },
  { text: 'exhausted' },
  { text: 'heartbroken' },
  { text: 'focused' },
  { text: 'aggressive' },
  { text: 'indifferent' },
];

const UserQuickOptions = ({ postUserPromptToAnalyze }) => {
  const handleOptionClick = (option) => {
    postUserPromptToAnalyze(option);
  };

  const renderOptions = () => {
    return options.map((option, index) => {
      return (
        <StyledUserOption
          key={index}
          onClick={() => handleOptionClick(option.text)}
        >
          {option.text}
        </StyledUserOption>
      );
    });
  };

  return (
    <StyledUserQuickOptions>
      <div>{renderOptions()}</div>
    </StyledUserQuickOptions>
  );
};

UserQuickOptions.propTypes = {
  postUserPromptToAnalyze: PropTypes.func.isRequired,
};

export default UserQuickOptions;
