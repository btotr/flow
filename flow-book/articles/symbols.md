flow uses flowcharts to expres the recipes. Each symbol represents a specific part of the recipe. this chapter describes the symbols used in flow. The symbols are based on a well known standard, the Unified modelling language 2.0, UML for short.


### task

A recipe is build up from tasks. A task could be cut, boil, etc. you could connect tasks by adding a line in-between them. The symbol is a rectangle with rounded corners.

here is an example of connecting two tasks

```
/-----\   /------\
| cut |---| boil |
\-----/   \------/
```


### input

The input symbol let you put ingredients into a task by connecting it with a line. The ingredients could be weight at once. They are placed in one stroke with the other ingredients so-that it is easy to see which ingredients must be bought.  

here is an example of an input symbol connected to a task

```
|----------|
| potatoes | 
|----------|
  |
  |
/-----\   /------\
| cut |---| boil |
\-----/   \------/
```

The potatoes are used for the cutting task. the result is passed to the boil task. Sometimes you need to pass it to another task. you could do this by add a little rectangle on the end of the task and at the begin of a task which need the result.

here is an example:

 ```
|----------|
| potatoes | 
|----------|
  |
  |
/-----\                          /------\
| cut |[]  .. other tasks ..   []| boil |
\-----/                          \------/
```

### flow

Sometimes a recipe could be large. To hint where you should start reading, you could use flow indicators.


#### start

The start of a recipe looks like a filled circle. This is very helpful to see directly where the recipe starts. Normally this will be in the left center.

```
  |----------|
  | potatoes | 
  |----------|
      |
      |
/\  /-----\                          /------\
||__| cut |[]  .. other tasks ..   []| boil |
\/  \-----/                          \------/
```

 

#### end

the end is indicted by a circle with a inner circle and means the end of the recipe.

```
  |----------|
  | potatoes | 
  |----------|
      |
      |
/\  /-----\                          /------\  /\
||__| cut |[]  .. other tasks ..   []| boil |__ 0
\/  \-----/                          \------/  \/
```

Note that, if an task end but the recipe isn't finished you will see the symbol with a cross.


#### continuation

A continuation is mark as a circle with a letter inside. This could be helpful to organise the recipe. For example when you reached the end of the paper.

```
  |----------|
  | potatoes | 
  |----------|
      |
      |
/\  /-----\     /\
||__| cut |[]-- A   
\/  \-----/     \/


/\    /------\  /\
A --[]| boil |__ 0
\/    \------/  \/

``` 

### comment

A task could have comments. Only comments which required in a recipe are added. The symbol looks like a small note with a dotted line to the task.

```
|--------|                     
| cheese |                     
|--------| | only small part | 
  |       :                    
  |      :                     
/-----\ :
| add |
\-----/

```

### decision

decision symbols are used to defer directions. For example while you are putting cheese in a pan, you may go to the next step if all cheese is added or go back a task to put another chunk of cheese. As convention only the success statement is showed

```
|--------|                                   |--------|
| cheese |                                   | nutmeg |
|--------| | only small part |               |--------|
  |       :                                    | 
  |      :                                     |
/-----\ :  /------\                           /-----\
| add |----| melt |-/\-- all cheese is added--| add |
\-----/    \------/ \/                        \-----/
   |----------------|

```

### fork

Most task during cooking could be done simultaneous. The fork symbol, let you fork your workflow. After a fork you could merge it by using the same symbol.


```
  |----------|    |------|
  | potatoes |    | egg  |
  |----------|    | salt |
      |           |------|
      |              | 
      |       ||   /-----\   || 
      |       ||---| mix |---||   
      |       ||   \-----/   ||
  /-----\     ||             ||
  | cut |[]---||             ||--
  \-----/     ||             ||
              ||   /------\  ||
              ||-[]| boil |--||
              ||   \------/  ||
```

### includes

flow recipes are designed to used together. i.e a whole dish could be show only the mean ingredients and include specific tasks which could stand alone. You could include an ingredient or a task with the same symbol. e.g. Tagliatelle alla Bolognese exists of preparing the ragú alla Bolognese and the Tagliatelle itself. i.e two other recipes are showing how to prepare them but the main recipe only shows how to combine them to prepare a dish. As a include is used as ingredient it should be prepared beforehand, the same as when you would be buy a ingredient wish should always be an alternative.

here is an example how you could use a include as ingredient, preparing Tagliatelle alla Bolognese.

```
|----------------| |-------------------------|
| Tagliatelle||| | | ragú alla Bolognese ||| |
|----------------| | peper                   |
  |                | parmesan                |
  |                |-------------------------|
  |                   |
 5 min.             /-----\
---\/---------------| add |
   /\               \-----/
  boil
```   

As ingredients a task could be used in the same manner. Lets say that you are preparing Tagliatelle. There could be a task which is roll. If you know how to roll your dough that is fine. You aren't cluttered with all the details of rolling your dough. However if this is the first time you roll a dough it could be tricky. In addition you could have different decisions like. do i have a pasta machine or do i have to roll by hand? It is easier to make a specialised task for in those circumstances which hide all the details.

```
/----------\   /-----\
| roll ||| |---| cut |
\----------/   \-----/
```

keep in mined that specialised task could help prevent clutter from the main flow, however usually the task should be clear to the user. A book describing how to make your own pasta's should explain the tasks with complementary images or external video to learn what a task means.


### time 

A time symbol could be used to indicate a certain task with a give time, e.g. boil for 5 min. The task is put under the symbol while the time is above it. The time could be given in minutes, hours and days

```
 5 min.
   \/----
   /\  
  boil
```   

