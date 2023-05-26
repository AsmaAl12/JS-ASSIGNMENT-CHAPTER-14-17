//============================Assignment # 8 JAVASCRIPT Chapter(15-17)======================//
//===============================JAVASCRIPT ARRAYS=================================//



//Q1:Declare an empty array using JS literal notation to store student names in future.
//Ans:
// var studentsNames = [];



//Q2: Declare an empty array using JS object notation to store student names in future.
//Ans:
// var studentNamesInFuture = [];



//Q3:Declare and initialize a strings array.
//Ans:
// var stringsArray = ["asma", "ice-cream", "juice", "mobilephone"];



//Q4:Declare and initialize a numbers array.
//Ans:
// var numbersArray = [22, 666, 1278, 123];



//Q5:Declare and initialize a boolean array.
//Ans:
// var booleanArray = ["true", "false"];



//Q6:Declare and initialize a mixed array.
//Ans:
// var mixedArray = ["asma", 55, "true", "false", 44];



//Q7:Declare and Initialize an array and store available education qualifications in Pakistan .
//(e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser. 
//Ans:
// var qualificationArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "PhD"];
// document.write( "<b> QUALIFICATIONS:- </b>" + "<br>" + "<br>" + "<br>");
// document.write("(1)SSC"+ "<br>" + "(2)HSC" + "<br>" + "(3)BCS" + "<br>" + "(4)BS" + "<br>" + "(5)BCOM" + "<br>" +  "(6)MS" + "<br>" + "(7)M.PHIL" + "<br>" + "(8)PhD" + "<br>");



//Q8:Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like
//Ans:
// var studentsNames = ["Asma", "Muqadas", "Rimsha"];
// var studentsScore = [320, 230, 480];
// var totalMarks = 500;
// document.write( "Score of " + (studentsNames[0]) + " is " + (studentsScore[0]) + " and Percentage: " +((studentsScore[0])/(totalMarks)*100) + "%" + "<br>" );
// document.write( "Score of " + (studentsNames[1]) + " is " + (studentsScore[1]) + " and Percentage: " +((studentsScore[1])/(totalMarks)*100) + "%" + "<br>" );
// document.write( "Score of " + (studentsNames[2]) + " is " + (studentsScore[2]) + " and Percentage: " +((studentsScore[2])/(totalMarks)*100) + "%" + "<br>" );



//Q9:. Initialize an array with color names. Display the array elements in your browser.
//a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.
//b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
//c. Add two more color to the beginning of the array. Display the updated array in your browser.
//d. Delete the first color in the array. Display the updated array in your browser.
//e. Delete the last color in the array. Display the updated array in your browser.
//f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
//g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. 
//Than remove the same number of color(s) from user-defined position/index. . Display the updated array in yourbrowser.
//Ans:
// var colorsNames = ["Violet" , "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];
// document.write( "<b> Array: </b>" + "<br>" );
// document.write( colorsNames + "<br>" + "<br>" + "<br>" + "<br>" );
// var firstColorName = prompt( "Which color do you want to add at tha beginning?" );
// colorsNames.unshift(firstColorName);
// document.write( "<b>" + "Updated array after adding the color name at the beginning:" + "</b>" + "<br>");
// document.write( colorsNames + "<br>" + "<br>" + "<br>" );
// var lastColorName = prompt( "Which color do you want to add at tha end of an array?" );
// colorsNames.push(lastColorName);
// document.write( "<b>" + "Updated array after adding the color name at the end:" + "</b>" + "<br>" );
// document.write( colorsNames + "<br>" + "<br>" + "<br>" );
// colorsNames.splice(0, 0, "white",  "golden");
// document.write( "<b>" + "Updated array after adding two colors names:" + "</b>" + "<br>"); 
// document.write( colorsNames + "<br>" + "<br>" + "<br>" ); 
// colorsNames.shift();
// document.write( "<b>" + "Updated array after deleting first color name:" + "</b>" + "<br>" );
// document.write( colorsNames + "<br>" + "<br>" + "<br>" );
// colorsNames.pop();
// document.write( "<b>" + "Updated array after deleting the last color name:" + "</b>" + "<br>" );
// document.write( colorsNames + "<br>" + "<br>" + "<br>" );
// var colorsIndex = +prompt( "write here the index number where you want to add a color." );
// var colorNameUpdated = prompt( "Write down the color name you want to add." );
// colorsNames.splice( colorsIndex,  0, colorNameUpdated );
// document.write( " <b> Updated array after adding your desried color names: </b>" + "<br>" );
// document.write( colorsNames + "<br>" + "<br>" +"<br>" );
// var colorIndex = +prompt( "Write here the index number from where you want to delete the color name.");
// var colorsNameUpdated = +prompt( "How many color do you want to delete?" );
// colorsNames.splice( colorIndex, colorsNameUpdated );
// document.write( "<b> Updated array after deleting the color names according to your desire: </b>" + "<br>" );
// document.write( colorsNames + "<br>" + "<br>" + "<br>" );



//Q10:Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
//Ans:
// var scoresOfStudents = [320,230,480,120];
// document.write( "<b> Scores od Students </b>:" + scoresOfStudents + "<br>" );
// scoresOfStudents.sort();
// document.write( "<b> Ordered scores of students </b>: " + scoresOfStudents + "<br>" );



//Q11:Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
//Ans:
// var cityNames = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write( "<b> CITIES LIST: </b>" + "<br>" );
// document.write( cityNames + "<br>" + "<br>" + "<br>" );
// var selectedCities = ["Karachi","Lahore","Islamabad"];
// document.write( "<b> SELECTED CITIES LIST: </b>" + "<br>" ); 
// document.write( selectedCities + "<br>" + "<br>" + "<br>" );



//Q12:. Write a program to create a single string from the below mentioned array:
//var array = [“This ”, “ is ”, “ my ”, “ cat”];
//(Use array’s join method);
//Ans:
// var arr = ["This "," is"," my"," cat"];
// var string = arr.join("");
// document.write( string + "<br>" + "<br>" + "<br>" );



//Q13:Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out
//Ans:
// var devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// var firstValue = devices.shift();
// var secondValue = devices.shift();
// var thirdValue = devices.shift();
// var fourthValue = devices.shift();
// console.log(firstValue);   
// console.log(secondValue);  
// console.log(thirdValue); 
// console.log(fourthValue);



//Q14:. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In First Out).
//ANS:
// var devices = [];
// devices.push("Keyboard");
// devices.push("Mouse");
// devices.push("Printer");
// devices.push("Monitor");
// var lastValue = devices.pop();
// var secondLastValue = devices.pop();
// var thirdLastValue = devices.pop();
// var fourthLastValue = devices.pop();
// console.log(lastValue);          
// console.log(secondLastValue);     
// console.log(thirdLastValue); 
// console.log(fourthLastValue);  



//Q15:. Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//Display the following dropdown/select menu in your browser using document.write() method.
//Ans:
// var phoneManufacturers = ["Appla", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write( "<select>" );
// document.write( "<option>" + phoneManufacturers[0] + "</option>" );
// document.write( "<option>" + phoneManufacturers[1] + "</option>" );
// document.write( "<option>" + phoneManufacturers[2] + "</option>" );
// document.write( "<option>" + phoneManufacturers[3] + "</option>" );
// document.write( "<option>" + phoneManufacturers[4] + "</option>" );
// document.write( "<option>" + phoneManufacturers[5] + "</option>" );
// document.write( "</select>" );






//===============================================Chapters (15-17) completed=====================================//