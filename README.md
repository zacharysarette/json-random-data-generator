# JSON RANDOM DATA GENERATOR

---

# Table of Contents

* [About](#About)

* [Installation](#Installation)

* [Usage](#Usage)

* [Methods](#Methods)

* [Command Line Tool](#Command-Line-Tool)

* [Example Config File](#Example-Config-File)

* [Example Output File](#Example-Output-File)

---
## About

This is little utility made to easily generate mock-up json data for prototyping.

You can import it into your project, or use it as a command line tool.

---
## Installation
```
$ npm i json-random-data-generator
```
---
## Usage

import jsonRandomDataGenerator from 'json-random-data-generator'

---
## Methods
### Main Methods

(method) jsonDataGenerator.buildJsonStringFromConfigFile({ configFile, objectArrayName, numberOfObjects }: {
    configFile?: string;
    objectArrayName?: string;
    numberOfObjects?: number;
}): string

(method) jsonDataGenerator.buildJsonStringFromConfigFileAndWriteToFile({ filename, configFile, objectArrayName, numberOfObjects }: {
    filename?: string;
    configFile?: string;
    objectArrayName?: string;
    numberOfObjects?: number;
}): void

(method) jsonDataGenerator.buildJsonStringFromConfigString({ configString, objectArrayName, numberOfObjects }: {
    configString?: string;
    objectArrayName?: string;
    numberOfObjects?: number;
}): string

(method) jsonDataGenerator.configObject(): typeof buildConfig

(method) jsonDataGenerator.buildJsonStringFromConfigObject({ configObject, numberOfObjects }: {
    configObject: any;
    numberOfObjects: any;
}): string

(method) jsonDataGenerator.buildJsonStringFromConfigObjectAndWriteToFile({ filename, configObject, objectArrayName, numberOfObjects }: {
    filename?: string;
    configObject?: {
        objectArrayName: any[];
    };
    objectArrayName?: string;
    numberOfObjects?: number;
}): void

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
## Command Line Tool

> generateJson

Usage: json-data-generator -a string -f string -n number -c string

Options:
      --help                       Show help                           [boolean]
      --version                    Show version number                 [boolean]
  -a, --arrayName                  the name of the array of objects
                                                             [string] [required]
  -n, --numberOfObjectsToGenerate  The number of objects to generate in the json
                                   array                     [number] [required]
  -f, --fileName                   The file name for the output file to be put
                                   in the exports folder     [string] [required]
  -c, --configFile                 The path for the config file that is in the
                                   config folder             [string] [required]

Examples:
  npm run generate -- -a customerComments -f ./exports/exampleData.json -n 200
  -c ./configs/exampleConfig.json

  If the above example doesn't work, try adding the following line to your config file under scripts. 
  "generate": "generateJson"

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