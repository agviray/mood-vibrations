import { useState, useEffect } from 'react';
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

const UserQuickOptions = () => {
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    // If user selected option, send option to AI for analysis.
    console.log(selectedOption);
  }, [selectedOption]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
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

export default UserQuickOptions;
