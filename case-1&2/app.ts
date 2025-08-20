import { AndiFruit, FilterStock, Stock } from "./case1/func";
import { comments } from "./case2/data";
import { countComments } from "./case2/func";

//Case 1
console.log("Case 1");
AndiFruit();
FilterStock();
Stock();

//Case 2
console.log("Case 2");
console.log("Total comment: ", countComments(comments));
