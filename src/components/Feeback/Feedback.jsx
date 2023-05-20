import React, { Component } from 'react';
import { FeedbackOptoins } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { Wrapper } from 'components/Feeback/Feedback.styled';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = event => {
    const { name } = event.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return this.countTotalFeedback() > 0
      ? Math.round((good / this.countTotalFeedback()) * 100)
      : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const arrayKeys = Object.keys(this.state);
    const countTotal = this.countTotalFeedback();

    return (
      <Wrapper>
        <Section title="Please leave your feedback">
          <FeedbackOptoins
            options={arrayKeys}
            onLeaveFeedback={this.handleBtnClick}
          />
        </Section>

        <Section title="Statistics">
          {countTotal === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Section>
      </Wrapper>
    );
  }
}
