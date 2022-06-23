class Story {

    constructor(title, creator){
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes(){
        if(this._likes.length == 0){
            return `${this.title} has 0 likes`;
        } else if (this._likes.length == 1){
            return `${this._likes[0]} likes this story!`;
        } else {
           return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        };
    };

    like(username){
        if(this._likes.includes(username)){
            throw Error(`You can't like the same story twice!`);
        };
        if(username == this.creator){
            throw Error(`You can't like your own story!`) ;
        };
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    };

    dislike(username){
        let foundUserIndex = this._likes.findIndex(e => e == username);
        if(foundUserIndex == -1){
            throw Error(`You can't dislike this story!`);
        };
        this._likes.splice(foundUserIndex, 1);
        return `${username} disliked ${this.title}`;
    };
    comment(username, content, id){
        let foundComment = this._comments.find(c => c.id == id);
        if(id == undefined || foundComment == undefined){
            this._comments.push({
                username,
                content,
                id: this._comments.length + 1,
                replies: []
            });
            return `${username} commented on ${this.title}`;
        };

        foundComment.replies.push({
            id: `${foundComment.id}.${foundComment.replies.length + 1}`,
            username,
            content
        });

        return "You replied successfully";
    };
    toString(sortingType){
        let result = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`];
        
        if(this._comments.length == 0){
            result.push(`Comments:`);
        } else {
            result.push(`Comments:`);
            if(sortingType=='asc'){
                //sort comments
                let sortedComments = this._comments.sort((a,b) => 
                    a.id - b.id);
                
                for (const comment of sortedComments) {
                    //add comment to result
                    result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
                    //sort its replies
                    comment.replies.sort((a,b) => a.id - b.id);
                    //add replies to the result
                    comment.replies.forEach(r => result.push(`--- ${r.id}. ${r.username}: ${r.content}`));
                }         
            } else if (sortingType == 'desc'){
                //sort comments
                let sortedComments = this._comments.sort((a,b) =>  b.id - a.id
                );
                
                for (const comment of sortedComments) {
                    //add comment to result
                    result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
                    //sort its replies
                    comment.replies.sort((a,b) => b.id - a.id);
                    //add replies to the result
                    comment.replies.forEach(r => result.push(`--- ${r.id}. ${r.username}: ${r.content}`));
                }      
            } else if(sortingType == 'username'){
                let sortedComments = this._comments.sort((a,b) => 
                    a.username.localeCompare(b.username));
                
                for (const comment of sortedComments) {
                    //add comment to result
                    result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
                    //sort its replies
                    comment.replies.sort((a,b) => a.username.localeCompare(b.username));
                    //add replies to the result
                    comment.replies.forEach(r => result.push(`--- ${r.id}. ${r.username}: ${r.content}`));
                }
            }
        }
        
        return result.join('\n');
    }
}

let art = new Story("My Story", "Anny");
//art.like("John");
console.log(art.likes);
//art.dislike("John");
console.log(art.likes);
//art.comment("Sammy", "Some Content");
//console.log(art.comment("Ammy", "New Content"));
//art.comment("Zane", "Reply", 1);
//art.comment("Jessy", "Nice :)");
//console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));


