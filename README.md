# About the solution #
This is my solution for tech task. I decided to use Cypress framework because in my opinion it is easy to use and very fast for the tasks like this where I need to cover some web scenarios. 

Unfortunately I did not have enough time to do all I wanted to show. Normally I would also add Cucumber here and use BDD approach with Given/When/Then structure. I believe it gives a lot of value because code becomes also a good documentation and it is easy to read for non-technical people. 

One more think which is missing and could be a gread addition is one of library which generates nice looking reports. For example: 
```
cypress-mochawesome-reporter
``` 

I have done what I can to make all of the code reusable. If I had more time I would do more cleanup.

# Problems #
During creating this solution I have had a lot of problems with modal windows which was showing quite randomly. I have managed to prepare a stable solution but I know it could be done better. Normally I would propably try to preapre some solution to manage popuping dialog windows but for now I have made it as simple as I could.

# How to run the code #
Open command line, go to the project folder and write:
```
npm install
```
this will download all dependences needed to run the code.

There are two ways to run this test. 
First is to run it directly from command line. To do this open CLI, go to the project folder and write command:
```
npx cypress run
```
this will run the tests directly form the command line.

Second way is to open Cypress framework and run tests from there. To do this write in command line:
```
npx cypress open
```