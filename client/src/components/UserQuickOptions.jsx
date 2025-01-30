import {
  StyledUserQuickOptions,
  StyledUserOption,
} from './styles/UserQuickOptions.styled';

const options = [
  { option: 'excited' },
  { option: 'chill' },
  { option: 'energetic' },
  { option: 'studious' },
  { option: 'romantic' },
  { option: 'confused' },
  { option: 'mysterious' },
  { option: 'happy' },
  { option: 'daring' },
  { option: 'melancholic' },
  { option: 'sneaky' },
  { option: 'hopeful' },
  { option: 'exhausted' },
  { option: 'heartbroken' },
  { option: 'focused' },
  { option: 'aggressive' },
  { option: 'indifferent' },
];

const UserQuickOptions = () => {
  const renderOptions = () => {
    return options.map((option, index) => {
      return (
        <StyledUserOption
          key={index}
          onClick={() => console.log(option.option)}
        >
          {option.option}
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
