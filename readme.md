
SMART GOVERNANCE is the most complete enterprise governance management solution for decision-making ecosystems, supporting your chain of command decision-making processes, including the power of authority conditional rules, and multiple boards, committee, council, and assembly meetings, allowing for greater agility in the decision-making process while eliminating the physical paper clutter (or the email nightmare) and its logistics, time and resource consumption.

Inspiration
I wanted to make digital tools during a pandemic for our citizens. Tools should help them to take the correct decisions and they should finish the voting process easier.

What it does
It provides resources for election, a digital tool, and a digital ballot system for voting

Voting Buddy Summary of Functionality
Contact e-mail Contact by Form Voting Buddy Features Office of the Clerk, U.S. House of Representatives Congress Information Bibliography for Candidate

1.Resources-
Office of the Clerk, U.S. House of Representatives Resources

Daily Legislative Schedule Weekly Legislative Schedule Roll Call Votes Live Floor Proceedings Discharge Petitions Congressional Record House Journal Congressional Calendars How Our Laws Are Made Congressional Research Reports Legislative Process Videos Congress Profiles Electoral College FAQs Legislative FAQs

2.Digital tools- Helping citizens to plan ballot-Digital tool to help to fill up Ballot-
Guide lines and tools for Ballot
---------------------------------
1 See your ballot. Dive into nonpartisan info on every candidate and ballot measure on your personal ballot.

2 Rally friends. Activate and engage others with a BallotParty or become a SuperVoter.

3 Make a plan. Vote safe and informed by making a plan to vote in person or by mail.

4 Vote! Keep your ballot in-hand for voting at the polls or at your kitchen counter.

3. Digital System resources for Voting
Results of the democratic and republican votes that were cast on the bill

This API will provide information on bills that passed through the house and the results of the democratic and republican votes that were cast on the bill

Step by step guidance how to use API.
Welcome to ProPublica's API Key:
76LtvQr5VNrRXEGLhfO5Npw1DrGTZx5Ed0gbBoze


Congress
The ProPublica Congress API Used for this project.

Propublica api
https://projects.propublica.org/api-docs/congress-api/#overview

jquery

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


https://bioguideretro.congress.gov/


HOW TO USE POSTMAN
==================
1. Go to Postman.com and create a free account
2. Install the PostMan agent on your computer

HOW TO USE API
==============
1. Test the API in postman, if it doesn't work in postman, it will not work for your website
2. Create your page and create the script for that page
3. Link in the jQuery script in the header of your page: <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
4. Link in your own script page to the html page
5. Decide in which format you want to display the information you get from the API (next steps are based on using a table)
6. Create a table, give it an "id", and style it so it looks like you want it to looks (<table>)
7. Create the top row of the table which is basically the header (<tr>)
8. In the top row (header) create each of the cells you want (<th>) and give it some text as a header description. Note: remeber to change the width of each cell accordingly and all rows below will follow the same width
9. Determine when you want to get the data from the API, going forward, the example is based on if you want to get the data from the API when the page first loads
10. In your script file that you created, create the window.onload event with an empty function (window.onload=function(){})
11. go back to postman, on the request that you tested successfully, in the right hand top corner click the "code" link and select "JavaScript - jQuery"
12. Copy the code that postman gives you and paste this in the funbction in the script that you created
13. Now to test, open your page, open the console and make sure the data from the API is in your console.
14. Replace the console.log(response) code in the done section of the code you coped from postman with the code to put the data from the API in your table:
15. Assign the result of document.getElementById("your table id here") to a variable. This will get your table form the HTML and assign it to the variable so that you can add rows and columns to it using the variable
16. Now create a for loop that loops through the results form the API 
17. Now for each row, assign that rows actual value to a variable using the variable in the for loop as an index
18. Now insert a new row into your table using the table variable you created .insertRow(). Remember to specify an index as a parameter in the .insertRow function. Hardcoding this index to 1 will always put the new rows at the top of the table below the header. If you always want to add the new row to the bottom, specify the index as your table variable .rows.length. Rememgebr to assign the result of the insertRow function to a new variable, this variable will hold the new row that you added and you'll need this to add the new columns to this new row
19. For each of the columns you need to add to the new row, call the .insertCell() function on your new row variable and give it the correct index. Make sure this is also assigned to a variable since you'll need that variable to set the value of the column
20. Lastly, use the columns variables .innerHTML to assign the values from the API