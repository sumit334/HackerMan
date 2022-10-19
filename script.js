//HACKER MAN
let account_type = prompt("Enter the type of account You Want to Hack from: 1.FaceBook 2.Instagram 3.Gmail 4.PhoneAccess");
let username = prompt("Enter the username or userId");
let hacking = ["Initializing Hack tool...",
	`Connecting to ${account_type} ...`,
	"Connecting to server 1...",
	"Connection failed. Retrying...",
	"Connecting to server 2...",
	"Connected Successfully...",
	`Username ${username} of ${account_type} is accesing...`,
	"Trying Brute Force with a special hacking code 00100101010....",
	"200K passwords tried...",
	"Match not found",
	"Initiating rematch using another 200K passwords...",
	`Another 200k passwords tried for ${username}`,
	"Match not found...",
	"Another 200K passwords tried...",
	"Match not found...",
	"Generating more different passwords",
	"Another 199K passwords tried...",
	"Match found...",
	`Accessing Account for username ${username}...`,
	`Hacking initiated for ${account_type} : ${username}`,
	"Account details fetched",
	"All logs Accesse ",
	"Hacked Successfully..."
]

const display_lag = async (time_inMilisec) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(1)
		}, time_inMilisec)
	})
}

const showHacking = async (messages) => {
	await display_lag(2000);
	content.innerHTML = content.innerHTML + messages + "<br>"
}

(async() => {
	for (let i = 0; i < hacking.length; i++) {
		await showHacking(hacking[i])
	}
})()
