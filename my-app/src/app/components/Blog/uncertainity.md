<div style="text-align: center;">
  <h1>Probability </h1>
</div>

## Axioms in Probability

- Probability values range between 0 and 1. Zero means an event is impossible, and one means an event is certain.
- The sum of probabilities for all possible outcomes equals 1.

## Summing Probabilities

Consider a student's performance prediction where the possible grades are A, B, C, D, and F. If each outcome is equally likely, the probability of each grade is 0.2. If certain grades are more likely based on past performance, the probabilities would be adjusted accordingly.

**Example:**

- Probability of getting an A: 0.3
- Probability of getting a B: 0.4
- Probability of getting a C: 0.2
- Probability of getting a D: 0.1

## Types of Probability

### Unconditional Probability

The probability of an event without additional information. For example, the probability of a student passing a course.

### Conditional Probability

The probability of an event given some evidence. It is expressed as "the probability of A given B".

**Example:**

To find the probability of passing given a high GPA, we use the formula to compute the probability.

## Random Variables and Probability Distributions

A random variable can take on various values, each with its own probability.

**Example:**

For a variable `Grade` representing student grades:

- Probability of A: 0.3
- Probability of B: 0.4
- Probability of C: 0.2
- Probability of D: 0.1

In vector notation: `[0.3, 0.4, 0.2, 0.1]`

## Independence

Events are independent if the occurrence of one does not affect the probability of the other.

**Example:**

The probability of a student attending extra classes and their exam performance are independent events.

## Bayes' Rule

Bayes' rule helps calculate conditional probabilities.

**Example:**

To find the probability of a student passing the course given that they attended extra classes:

- Probability of attending extra classes given passing: 0.7
- Probability of attending extra classes: 0.5
- Probability of passing: 0.4

Using Bayes' rule, you can calculate the probability.

## Joint Probability

Joint probability refers to the likelihood of multiple events occurring together.

**Example:**

For a student attending extra classes and passing the course:

| Attendance/Pass | Pass | Fail |
|-----------------|------|------|
| Attended        | 0.28 | 0.22 |
| Not Attended    | 0.12 | 0.38 |

To find the probability of attending extra classes given passing, you use joint probability values.

**Normalized Result:**

For attendance given passing: `[0.7, 0.3]`

## Probability Rules

- **Negation:** The probability of not occurring is 1 minus the probability of occurring.
- **Inclusion-Exclusion:** The probability of either event occurring is the sum of their probabilities minus the probability of both occurring together.
- **Marginalization:** The probability of an event is the sum of probabilities over all other variables.
- **Conditioning:** The probability of an event is calculated by considering whether another event has occurred or not.

## Bayesian Networks

Bayesian networks represent dependencies among random variables using directed graphs.

**Example Network:**

Consider a network involving:

- **GPA:** The student's GPA.
- **Extra Classes:** Whether the student attended extra classes.
- **Pass:** Whether the student passes the course.
- **Scholarship:** Whether the student receives a scholarship.

## Sampling

Sampling helps us approximate probabilities by observing a subset of data. It’s like taking a sneak peek at a few chapters of a textbook to estimate how much you'll need to study for the whole course.

## Die Rolling Example

Imagine you’re rolling a die 600 times to estimate the probability of each number. You expect to roll each number about 100 times. If you end up rolling a 3 more often than expected, it’s a bit like your grades: sometimes you do better (or worse) than you expected. By calculating the frequency of each number, you get an estimate of how the die behaves. This is like figuring out how often you’ll need to pull an all-nighter by observing your study habits!

## Rain and Train Example

Suppose you’re trying to predict if your campus train will be on time based on the weather. If you sample that it’s “none” raining today, you would then check if the train is on time given this weather condition. Repeat this for many days to estimate how weather impacts train punctuality. It’s similar to analyzing if your study sessions at the library lead to better exam grades compared to studying at home.

## Likelihood Weighting

Likelihood weighting is a bit like focusing on the study sessions where you actually have a group project due. Instead of discarding all your study time, you adjust your focus based on how much each session contributes to your project. If you know a particular study group always meets before an exam, you weight these sessions more heavily. This is similar to refining your study plan based on what’s most effective for your grades.

# Markov Models

Markov Models are useful for understanding sequences of events, like predicting your semester performance based on your current grades.

## The Markov Assumption

The Markov assumption suggests that future outcomes depend only on the present, not on the entire history. Imagine you’re predicting your final grade based only on your current grades and not on every single test you’ve taken throughout your academic career. This simplifies things and makes predictions more manageable—kind of like using your current GPA to estimate your final semester performance.

## Markov Chain

A Markov Chain is a sequence where each event depends only on the previous one. For example, if you had a study group today, you might be more likely to attend another study group tomorrow. By creating a Markov Chain, you can track patterns like how often you end up in study sessions based on past behavior. It’s like predicting if you’ll need coffee tomorrow based on how much you had today.

# Hidden Markov Models

Hidden Markov Models (HMMs) are like trying to figure out your roommate’s study habits based on what you observe about them, rather than what they tell you.

## Sensor Model

In HMMs, the sensor model represents the probability of observing something given a hidden state. For instance, if your roommate is stressed (hidden state), they might be studying all the time (observation). By noting their behavior (like late-night studying), you can infer how stressed they are. This is similar to figuring out if someone’s overwhelmed by observing their study patterns and stress levels.

## Hidden Markov Chain

In a Hidden Markov Model, you have two layers: the hidden states (like your roommate’s true study habits) and the observations (like their frequent visits to the library). Using HMMs, you can:

- **Filtering:** Determine the likelihood of your roommate being stressed based on their study patterns. For instance, given their late-night study sessions, how likely is it that they are stressed right now?
- **Prediction:** Estimate future states based on past observations. For example, if your roommate has been stressed recently, predict if they will need extra help in the coming weeks.
- **Smoothing:** Calculate past states given current observations. For example, determine if your roommate was stressed last month based on their current study habits.
- **Most Likely Explanation:** Find the most probable sequence of events. For instance, deduce the most likely reasons behind your roommate’s study habits and stress levels over the past semester.

Using an HMM for the most likely explanation can help you understand patterns in behavior, like predicting the sequence of events leading to a last-minute cramming session based on your roommate’s study habits!

