'use strict'

let heathTeamAvg =  (89 + 120 + 103) / 3;
let zaneTeamAvg =  (116 + 94 + 123) / 3;
let mariahTeamAvg =  (97 + 134 + 105) / 3;

if(heathTeamAvg > zaneTeamAvg)
{
    console.log('Heath\'s Team wins the average and the average score is ' + heathTeamAvg )
}
else{
    console.log('Zane\'s Team wins the average and the average score is ' +zaneTeamAvg)
}

if (heathTeamAvg > zaneTeamAvg  && zaneTeamAvg > mariahTeamAvg) {   console.log('Heath\'s team is wins'); }
else if (zaneTeamAvg > heathTeamAvg && zaneTeamAvg > mariahTeamAvg) { console.log('Zane\'s team is wins'); }
else if ( mariahTeamAvg > heathTeamAvg &&  mariahTeamAvg > zaneTeamAvg) { console.log('Mariah\'s team wins'); }
else if (heathTeamAvg === zaneTeamAvg  && heathTeamAvg > mariahTeamAvg) {   console.log('Heath\'s team and Zane\'s team have tie'); }
else if (heathTeamAvg === mariahTeamAvg && heathTeamAvg > zaneTeamAvg ) {   console.log('Heath\'s team and Mariah\'s team have tie'); }
else if (zaneTeamAvg === mariahTeamAvg && mariahTeamAvg > zaneTeamAvg ) {   console.log('Zane\'s team and Mariah\'s team have tie '); }
else { console.log('All teams have a tie \n\n'); }






// Heath and Zane are both playing basketball in different teams. In the latest 3 games, Heath’s team scored 89, 120 and 103 points while Zane’s team scored 116. 94 and 123 points.
// 1.	Calculate the average score for each team
// 2.	Decide which team wins in average (highest average score) and print the winner to the console. Also include the average score in the output.
// 3.	Then change the scores to show different winners. Don’t forget to consider that there might be a draw (the same average score)
// 4.	EXTRA: Mariah also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average value to the console. HINT: you will need the && operator to take the decision.
