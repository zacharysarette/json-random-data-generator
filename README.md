# JSON RANDOM DATA GENERATOR

---

# Table of Contents

* [About](#About)

* [Installation](#Installation)

* [Usage](#Usage)

* [Methods](#Methods)

* [Example Config File](#Example-Config-File)

* [Example Output File](#Example-Output-File)

* [CLI](#CLI)

---
## About

This is little utility made to easily generate mock-up json data for prototyping.

The generator will return a string which can be converted into a json object

There is also a CLI that you can download in a separate package.

See [CLI](#CLI) for more details.

---
## Installation
```
npm i json-random-data-generator
```
---
## Usage

import jsonRandomDataGenerator from 'json-random-data-generator'

---
## Methods
### Main Methods



### Build Config Methods

  (method) buildConfig.makeArrayField(name?: string, values?: any[]): {
    name: string;
    type: string;
    values: any[];
}

(method) buildConfig.makeValueField(name?: string, values?: any[]): {
    name: string;
    type: string;
    values: any[];
}

(method) buildConfig.makeDateField(name?: string, values?: any[]): {
    name: string;
    type: string;
    values: any[];
}

(method) buildConfig.makeNumberField(name?: string, values?: any[]): {
    name: string;
    type: string;
    values: any[];
}

(method) buildConfig.makeNumberFloatField(name?: string, values?: any[]): {
    name: string;
    type: string;
    values: any[];
}

(method) buildConfig.buildConfigObject({ objectArrayName, fields }: {
    objectArrayName?: string;
    fields?: any[];
}): {
    [x: string]: any[];
}

---

## Example Config File:

```json
{
  "customerComments": [
    {
      "name": "donutName",
      "type": "arr",
      "values": [
        "Cinnamon",
        "Bavarian Cream",
        "Toasted Coconut",
        "Jelly Stick",
        "Powdered Sugar",
        "Old Fashioned Cake",
        "Vanilla Frosted with Sprinkles",
        "Original Stick",
        "Boston Cream",
        "Jelly",
        "Butternut",
        "Double Chocolate",
        "Chocolate Glazed",
        "Strawberry Frosted with Sprinkles",
        "Blueberry Cake",
        "Maple Frosted with Sprinkles",
        "French Cruller",
        "Glazed Stick",
        "Glazed Chocolate Stick",
        "Glazed",
        "Chocolate Frosted"
      ]
    },
    { "name": "price", "type": "num", "values": [1, 200] },
    { "name": "customerRating", "type": "numFloat", "values": [1, 100] },
    {
      "name": "customerComment",
      "type": "arr",
      "values": [
        "Great!",
        "Not as good at Tom Hartman's.",
        "Gross!",
        "Meh.",
        "I have had worse.",
        "It was okay... I guess...",
        "Delicious!",
        "I want my money back.",
        "Can I have the recipe?",
        "I ate 23 of these, and then I got sick..."
      ]
    },
    {
      "name": "company",
      "type": "val",
      "values": ["The Example Doughnut Company"]
    }
  ]
}
```

## Example Output File

```json
{
"customerComments":[
{
"company": "The Example Doughnut Company",
"customerComment": "It was okay... I guess...",
"customerRating": 68.50454115485834,
"price": 180,
"donutName": "Chocolate Frosted"
},{
"company": "The Example Doughnut Company",
"customerComment": "I ate 23 of these, and then I got sick...",
"customerRating": 86.2937054940101,
"price": 186,
"donutName": "Toasted Coconut"
},{
"company": "The Example Doughnut Company",
"customerComment": "I have had worse.",
"customerRating": 20.13289213464826,
"price": 125,
"donutName": "Original Stick"
},{
"company": "The Example Doughnut Company",
"customerComment": "Great!",
"customerRating": 68.4890538357093,
"price": 11,
"donutName": "Butternut"
}
]
}
```

## CLI

If you would like to use the CLI, you can check out the [github repository](https://github.com/zacharysarette/json-random-data-generator-cli#readme) or the [npm page](https://www.npmjs.com/package/json-random-data-generator-cli) for more details.

### Installation

Locally:
```
npm i --save-dev json-random-data-generator-cli
```

Globally:
```
npm install -g json-random-data-generator-cli
```

