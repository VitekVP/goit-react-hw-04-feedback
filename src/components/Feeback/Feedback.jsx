import { useState } from 'react';
import { FeedbackOptoins } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { Wrapper } from 'components/Feeback/Feedback.styled';

export function Feedback() {
  const [good, setGoog] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const arrayKeys = Object.keys({ good, neutral, bad });

  const handleBtnClick = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGoog(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    countTotalFeedback() > 0
      ? Math.round((good / countTotalFeedback()) * 100)
      : 0;

  return (
    <Wrapper>
      <Section title="Please leave your feedback">
        <FeedbackOptoins options={arrayKeys} onLeaveFeedback={handleBtnClick} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </Section>
    </Wrapper>
  );
}
