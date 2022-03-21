<div align="center">
  <h1>
    Aldi API Wrapper
  </h1>
  </br>
  <p>
    <a href="https://www.npmjs.com/package/aldi-wrapper"><img src="https://img.shields.io/npm/v/aldi-wrapper" alt="NPM version" /></a>
    <a href="https://github.com/RinseV/aldi-wrapper"><img src="https://img.shields.io/npm/l/aldi-wrapper" alt="NPM license" /></a>
    <a href="https://www.npmjs.com/package/aldi-wrapper"><img src="https://img.shields.io/librariesio/release/npm/aldi-wrapper" alt="NPM dependencies"/></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/aldi-wrapper/"><img src="https://nodei.co/npm/aldi-wrapper.svg" alt="npm installnfo" /></a>
  </p>
</div>

Unofficial Node.js API wrapper for the Dutch [Aldi](https://www.aldi.nl/).

## Installation

```sh
npm install aldi-wrapper
```

or

```sh
yarn add aldi-wrapper
```

then
```typescript
import { Aldi } from 'aldi-wrapper';
```

## Basic usage

```typescript
// Creates Aldi object, set verbose to true to see all requests
const aldi = new Aldi({ verbose: true });
// Gets products by name
const products = await aldi.product().getProductsFromName('melk');
```

More information about the functions and parameters can be found on the [wiki](https://github.com/RinseV/aldi-wrapper/wiki)

## Example usage

For all of these examples, please keep in mind that your function in which you request something should be `async` since the requests return a `Promise`.

#### Product

If I want to find all product names that match a given query:

```typescript
import { Aldi } from 'aldi-wrapper';

async function findProducts(productName: string) {
    const aldi = new Aldi();
    const products = await aldi.product().getProductsFromName(productName);
    console.log(
        products.articles.map((article) => {
            return article.title;
        })
    );
}

findProducts('karnemelk');
```
```sh
[ 'Karnemelk ', 'Biologische karnemelk', 'Karnemelkdessert' ]
```

#### Recipe

If I want to find all recipe names that match a given query:

```typescript
import { Aldi } from 'aldi-wrapper';

async function findRecipes(recipeName: string) {
    const aldi = new Aldi();
    const recipes = await aldi.recipe().getRecipesFromName(recipeName);
    console.log(
        recipes.recipes.map((recipe) => {
            return recipe.title;
        })
    );
}

findRecipes('pizza');
```
```sh
[
  'Pizza rolls gevuld met kip',
  'Pizza met gehakt',
  'Homemade pizza',
  'Pizza met ansjovis',
  'Gezonde Sinterklaas-snack: pizza toast met verstopte groenten',
  'Pizza van Turks brood met hummus en gefrituurde aubergine',
  'Vegetarische pizza',
  'Mini bladerdeegpizza’s met tomatensaus, kaas en basilicum',
  'Vier soorten zelfgemaakte bladerdeeghapjes '
]
```

