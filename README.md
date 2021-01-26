     J  SSS   OOO  N   N     RRRR  AA  N   N DDD   OOO  M   M     DDD  AA  TTTTTT AA       GGG  EEEE N   N EEEE RRRR  AA  TTTTTT  OOO  RRRR 
     J S     O   O NN  N     R   RA  A NN  N D  D O   O MM MM     D  DA  A   TT  A  A     G     E    NN  N E    R   RA  A   TT   O   O R   R
     J  SSS  O   O N N N     RRRR AAAA N N N D  D O   O M M M     D  DAAAA   TT  AAAA     G  GG EEE  N N N EEE  RRRR AAAA   TT   O   O RRRR 
 J   J     S O   O N  NN     R R  A  A N  NN D  D O   O M   M     D  DA  A   TT  A  A     G   G E    N  NN E    R R  A  A   TT   O   O R R  
  JJJ  SSSS   OOO  N   N     R  RRA  A N   N DDD   OOO  M   M     DDD A  A   TT  A  A      GGG  EEEE N   N EEEE R  RRA  A   TT    OOO  R  RR
                                                                                                                                            
                                                                                                                                                
---

# JSON RANDOM DATA GENERATOR

---

# Table of Contents

* [Installation](#Installation)

* [Usage](#Usage)

* [Methods](#Methods)

* [Command Line Tool](#Command-Line-Tool)

* [Example Config File](#Example-Config-File)

---
## Installation
```
$ npm i json-random-data-generator
```
---
## Usage

import json-random-data-generator from 'json-random-data-generator'

---
## Methods

buildJsonString({ configFile, objectArrayName, numberOfObjects }: { configFile: any; objectArrayName: any; numberOfObjects: any; }): any

 * Should return a string for random JSON Data

buildJsonStringAndWriteToFile({ filename, params }: { filename: any; params: any; }): void

 * Should build a string for random JSON data and save it to file

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
  -c exampleConfig.json

  If the above example doesn't work, try adding the following line to your config file under scripts. 
  "generate": "generateJson"

---

## Example Config File:

```json
{
  "theFields": [
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