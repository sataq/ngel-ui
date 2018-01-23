module.exports = {
  '*.{ts,tsx}': [
    'prettier --write',
    'tslint --fix --format verbose --type-check --project tsconfig.json',
    'git add',
  ],
};
