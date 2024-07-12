# YouNoodle Development Challenge

Welcome to the YouNoodle Development Challenge! Please follow the instructions below to get started.

## Getting Started

To participate in this challenge, you can either fork this repository or [duplicate it](https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository). For detailed instructions on the challenge requirements and submission process, please refer to the email you received with the challenge details.

## Installation
After forking or duplicating the repository, follow these steps to set up the project on your local machine:

1. Navigate to the project's root directory
1. Make sure you are using Node >= 18
2. Install the dependencies: `npm install`
3. Start the development server: `npm start`

# husky

We use [husky hooks](https://typicode.github.io/husky/#/) to install git hooks. 
It helps to check/fix code styles before commit.

## Install hooks
Run `npm run install` command to install husky hooks.

It will install pre-commit hook to check code styles before commit your code.
Possible issues with code styles will be fixed automatically.
If the problem can't be fixed automatically, you will see the error. 
Code won't be committed until you fix the issue locally.
