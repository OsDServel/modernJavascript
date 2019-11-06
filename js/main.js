steamAccountAPIKey= '2DB896096177F6F2E954614C5EC21803'
key= steamAccountAPIKey
let apiKey= key

let appId= '813780'

let url= 'http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=813780';


// INTRO TO PROMISES

// const promise= new promise((resolve, reject)=> {
// 	let number1= 5;
// 	if(number1== 5){
// 		resolve('Success');
// 	} else{
// 		reject('Failure');
// 	}
// });

// promise.then((message)=>{
// 	console.log(message);
// }).catch((message)=> {
// 	console.log(message);
// })


// async function sum(number1, number2){

//  	return await number1+ number2;
//  }





// fetch('http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=813780')
// 	.then(response=> {
// 		return response.json()
// 	})
// 	.then(data=> {
// 		//work with JSON data here
// 		console.log(data)
// 	})
// 	.cathc(err=> {
// 		//Do something for an error here
// 	})

// const response= await fetch('http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=813780');
// const myJson= await response.json();
// console.log(JSON.stringify(myJson));






















// API FETCH

const fetch= require('node-fetch');

 // let url= 'http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=813780';

async function fetchData(url) {
	let response= await fetch(url);
	let jsonResponse= await response.json();
	console.log(JSON.stringify(jsonResponse));
}

fetchData(url).catch(function(){
	console.log('Could not fetch data');
});

