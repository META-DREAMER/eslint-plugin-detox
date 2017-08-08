# eslint-plugin-detox

ESLint environment for wix/detox

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
OR
$ yarn add eslint --dev
```

Next, install `eslint-plugin-detox`:

```
$ npm install eslint-plugin-detox --save-dev
OR
$ yarn add eslint-plugin-detox --dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-detox` globally.

## Usage

Add `detox` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "detox"
    ]
}
```

Add the following line to the top of your detox test files:
```
/* eslint-env detox/detox, mocha */
```



