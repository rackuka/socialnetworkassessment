# The Social Network

This is nodejs implementation of the Social Network algorithmic assessment.

The task specification is in [docs/Social-Network-JavaScript-Assessment.pdf](docs/Social-Network-JavaScript-Assessment.pdf)

## The solution
The solution of the task mentioned is implemented within [src/socialgraphs.js](src/socialgraphs.js)

## How to run. First - Setup

Pre-requesites - you have nodejs and npm installed locally. If not plrease refer to corresponding sites for initial environment setup.

```
git clone https://github.com/rackuka/socialnetworkassessment
cd socialnetworkassessment
npm i
```
## Run with predefined data

There are two data presets according to the assignment mentioned above.

data/input1 contains
```
[3, 3, 3, 3, 3, 1, 3]
```

and data/input2 contains

```
[2, 2, 2, 2]
```
To run with input1 or input2 do
```
npm run start:input1
```
or
```
npm run start:input2
```
respectively.

## Run with own data
Create an input file, for example, 
```
mydata
```
Then run with the following command
```
npm run start mydata
```
## Run tests
```
npm test
```