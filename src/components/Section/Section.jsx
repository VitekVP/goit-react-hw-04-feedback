import PropTypes from 'prop-types';
import { WrapSection, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <WrapSection>
      <Title>{title}</Title>
      {children}
    </WrapSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
