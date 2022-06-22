class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            "picture": 200,
            "photo": 50,
            "item": 250
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        let currArticleModel = articleModel.toLowerCase();
        if (!this.possibleArticles.hasOwnProperty(currArticleModel)) {
            throw Error('This article model is not included in this gallery!');
        };

        let foundArticles = this.listOfArticles.filter(a => a.articleName == articleName);
        let exactArticle = foundArticles.find(a => a.articleModel == currArticleModel);
        //if articles with same name are found - compare articleModel, if same name and model is found - add quantity
        if (foundArticles.length > 0
            && exactArticle != undefined) {
            exactArticle.quantity += quantity;
        } else {
            //else add as a new article
            this.listOfArticles.push({
                articleModel: currArticleModel,
                articleName,
                quantity
            });
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {

        if (this.guests.find(g => g.guestName == guestName) != undefined) {
            throw Error(`${guestName} has already been invited.`);
        };

        this.guests.push({
            guestName,
            points: personality == 'Vip' ? 500
                : personality == 'Middle' ? 250
                    : 50,
            purchaseArticle: 0
        });

        return `You have successfully invited ${guestName}!`;
    };

    buyArticle(articleModel, articleName, guestName) {
       
        let currArticleModel = articleModel.toLowerCase();
        let foundArticles = this.listOfArticles.filter(a => a.articleName == articleName);
        let exactArticle = foundArticles.find(a => a.articleModel == currArticleModel);
        //if an article with same name and model doesn't exist, throw error
        if (foundArticles.length == 0
            || exactArticle == undefined) {
            throw Error('This article is not found.');
        };
        //If the quantity of the current article is equal to 0, return 
        if (exactArticle.quantity == 0) {
            return `The ${articleName} is not available.`;
        }
        //If the guestName is not present in the guests array, return
        let foundGuest = this.guests.find(g => g.guestName == guestName);
        if (foundGuest == undefined) {
            return "This guest is not invited.";
        }
        //check if guest has required number of points
        let articleCost = this.possibleArticles[currArticleModel];
        if (foundGuest.points < articleCost) {
            return "You need to more points to purchase the article.";
        }
        //reduce guest points, reduce article quantity, increase number of purchases of the guest
        foundGuest.points -= articleCost;
        foundGuest.purchaseArticle++;
        exactArticle.quantity--;
        
        return `${guestName} successfully purchased the article worth ${articleCost} points.`

    }

    showGalleryInfo(criteria) {
        let result = [];
        if (criteria == 'article') {
            result.push('Articles information:');
            this.listOfArticles.forEach(item => result.push(`${item.articleModel} - ${item.articleName} - ${item.quantity}`));

        } else if (criteria == 'guest') {
            result.push('Guests information:');
            this.guests.forEach(guest => result.push(`${guest.guestName} - ${guest.purchaseArticle}`));
        }
        return result.join('\n');
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));


