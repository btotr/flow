This chapter describes the principles of the methodology. The principles will make recipes more easy to read, reuse and consist.  

### tasks

Each recipe is build up from different task or instructions. The tasks are the building blocks of the flow methodology.

#### parallel

When we cook, we usually do different things at ones. You could say you do things in parallel. This is one of the most important aspects of cooking. No one actually weights every ingredient before they start cooking. In contrast, you read the recipe and makes a little road map what you will do and when. This process is quite odd if you imagine that a recipe should help you prepare something. The hard part of cooking (planning) is left over to the user.  

This could be an excerpt from a conventional receipt. 

"cut the carrot julienne about 2 inches long and 1/4 inch thick. meanwhile, cook the rice and add the melted cheese"

This excerpt is quite easy to follow however this is just a very small part and you have to plan a micro road map for each of those parts. In addition, a great chance that you missed the second sentence and didn't prepare the rice before you cut the carrot. The cheese is already melted so we have an issue.

In flow, you could express this same excerpt like:

```
|--- melt cheese ---|--/\__|   julienne
|---- cook rice ----|--\/  | /
|----- cut carrots --------|/
```
don't look at the specific meaning of the symbols which I will explain later on but see how the flowchart express parallel tasks by putting them below each other. Sure enough, it has a learning curve but when you used to it you will see directly what and when you need to something side by side without creating an internal micro road map. 

#### essence

Having background information on a classic dish or unique ingredients is a great way to help you cook the particular recipe. Unfortunately, some recipes are mixed within this background information so that it is hard to get the essence of the recipe. Flow strictly divide background info with the actual recipe. i.e. a recipe could have background information but shouldn't be part of the flowchart. A flowchart is bounded by a so-called region. This region shows the user where a recipe starts and ends. Additional information could be placed outside this region.  

#### mix

Most simple recipes are easy to follow but if you need to follow multiple recipes at ones it could be hard to efficiently plan the different task together. Flow is designed to mix recipes. It will give a clear indication where you have some time left to do other tasks. 

This is especially helpful while making bread. Bread has different stages like proofing and baking where you could work on other recipes. In addition, you would like to be as efficient with the oven. i.e. try to minimize the oven temperature differences. This is an optional addition to normal recipes where time indicators are added. for more information see: time symbols

#### reusability

Conventional recipes show a whole meal while multiple parts could be reused. For example, a traditional recipe for "lasagne alla bolognese" exists of three parts.

- preparing the pasta
- sofrito
- bolognese sauce

All three parts could be used in numerous recipes. Recipes, therefore, need to be written in the smallest atomic unit to encourage reusability. A recipe like "lasagne alla bolognese" will only refer to the three smaller recipes and add some information how to use them.

#### automatable

recipes should be shared. Unfortunately, it is rather hard to automate this task. For example, it is unfeasible to create a system, letting users fill in a form for sharing their recipe. flow enable software to generate recipes in a consist way.

### ingredients

A recipe without ingredients is quite useless. The flow methodology has some expectations for the ingredients.

#### unprepared

Often a recipe assumes, ingredients are already prepared. for example, 2 sliced tomatoes or 50 gram whisked egg yolk. This is fine for a simple task like grinding pepper but slicing two tomatoes or measure 50 gram of egg yolk while you need them directly is quite a task. Therefore ingredients need to be unprepared. You should be able to read a recipe and start from the first action not knowing the following step. i.e. all preparation is part of the recipe.

#### raw

Only raw ingredients are used in a flow recipe. Raw in a sense that it is not brand specific and hasn't any additions. flow should be country overarching. Often you see recipes with special ingredients which are used in specific countries only. Raw ingredients are likely available from anywhere. In addition - probably more important - those ingredients are usually healthier. However, the latter is more a philosophy than an addition to the methodology.

#### reference

Most ingredients could be bought, however, some of them could be hand made like, Ras el Hanout or Garam Masala. Such ingredients could be references to a recipe.