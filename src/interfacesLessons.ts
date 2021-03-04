export interface Person {
    name: string;
    age?: number;
}

//Enums

enum Type {
    Video,
    Quiz,
    BlogPost
}

export default Type;

//String enums

export enum TypeString {
    Video = 'VIDEO',
    Quiz = 'QUIZ',
    BlogPost = 'BLOG_POST'
}

