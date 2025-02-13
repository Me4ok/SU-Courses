function solution(input) {
    const actions = {
        // upvote,
        // downvote,
        // post: score
    }

    if (input == 'upvote') {
        this.upvotes++;
    } else if (input == 'downvote') {
        this.downvotes++;
    } else if (input == 'score') {
        let upvotesToPrint = this.upvotes;
        let downvotesToPrint = this.downvotes;
        let rating = '';

        if (this.upvotes + this.downvotes > 50) {
            const obfuscationNum = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
            upvotesToPrint += obfuscationNum;
            downvotesToPrint += obfuscationNum;
        }

        const totalScore = this.upvotes - this.downvotes;
        const totalVotes = this.upvotes + this.downvotes;
        const upvotesPercentage = this.upvotes * 100 / totalVotes;

        // console.log(`this.upvotes => ${this.upvotes}`);
        // console.log(`this.downvotes => ${this.downvotes}`);
        // console.log(`balance => ${balance}`);
        // console.log(`totalVotes => ${totalVotes}`);
        // console.log(`upvotesPercentage => ${upvotesPercentage}`);

        if (upvotesPercentage > 66 && totalVotes >= 10) {
            rating = 'hot';
        } else if (upvotesPercentage <= 66 && totalScore >= 0 && totalVotes > 100) {
            rating = 'controversial';
        } else if (totalVotes < 10) {
            rating = 'new';
        } else if (totalScore < 0) {
            rating = 'unpopular';
        }

        return [upvotesToPrint, downvotesToPrint, totalScore, rating];
    }
}


// // Broken test for 'new'
// let post = {
//     id: '1',
//     author: 'pesho',
//     content: 'hi guys',
//     upvotes: 0,
//     downvotes: 0
// };

// solution.call(post, 'upvote');
// score = solution.call(post, 'score');
// console.log(score);


let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');         // (executed 50 times)    
}
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score);