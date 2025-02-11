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
        const totalScore = this.upvotes - this.downvotes;
        let upvotesToPrint = this.upvotes;
        let downvotesToPrint = this.downvotes;
        let rating = '';

        if (this.upvotes + this.downvotes > 50) {
            const obfuscationNum = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
            upvotesToPrint += obfuscationNum;
            downvotesToPrint += obfuscationNum;
        }

        const balance = this.upvotes - this.downvotes;
        const totalVotes = this.upvotes + this.downvotes;
        const upvotesPercentage = this.upvotes * 100 / totalVotes;

        if (upvotesPercentage > 66) {
            rating = 'hot';
        } else if (balance > 0 && totalVotes > 100) {
            rating = 'controversial';
        } else if (balance < 0) {
            rating = 'unpopular';
        } else if (totalVotes < 10) {
            rating = 'new';
        }

        return [upvotesToPrint, downvotesToPrint, balance, rating];
    }
}

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
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score);