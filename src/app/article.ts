export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp() {
        this.votes++;
    }

    voteDown() {
        this.votes--;
        if (this.votes <= 0) {
            this.votes = 0;
        }
    }

    domain(): string {
        try {
            const link: string = this.link.split('//')[1];
            return link.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}