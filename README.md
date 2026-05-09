# Linear Algebra and Differential Equations True/False Practice

A small browser-based True/False practice tool for linear algebra and differential equations, based on Harvard's Math 21b course. 

Try it here: https://rodericguigocorominas.github.io/linalg-tf-practice/

## What this does

This site gives students a random set of True/False questions from a question bank. After submitting, students see which answers were correct and can read the explanations.

Questions are written in `questions.js`, while the title, intro text, categories, number of questions, and cooldown settings are controlled in `config.js`.

## Files

- `index.html` — the quiz interface and app logic.
- `config.js` — customizable settings for the quiz.
- `questions.js` — the question bank.
- `README.md` — this guide.

## How to make your own version

Fork or copy this repository, then edit two files:

1. `config.js`
2. `questions.js`

You usually do not need to edit `index.html`.

## Customizing the quiz

Edit `config.js`:

```js
window.APP_CONFIG = {
  title: "My Title",

  subtitle:
    "My subtitle",

  intro:
    "My intro.",

  questionCount: 10,

  attemptCooldownMinutes: 10,

  categories: [
    "Topic 1",
    "Topic 2",
    "Topic 3"
  ]
};
