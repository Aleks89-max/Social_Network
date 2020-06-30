
let state = {
    profilePage: {
        posts: [
            {message: 'Привет как дела', likeCount: 21, id: 1},
            {message: 'Привет как дела', likeCount: 19, id: 2},
            {message: 'Привет как дела', likeCount: 21, id: 3},
        ]
    },
    dialogsPage: {
        messages: [
            {message: 'Hi', id: 1},
            {message: 'How are you', id: 2},
            {message: 'Privet', id: 3},
        ],
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'},
        ]
    }

}


export default state;


export type DialogsType = {
    name: string;
    id: number;
}
export type MessagesType= {
    message: string;
    id: number;
}
export type PostsType = {
    message: string;
    likeCount: number;
    id: number;
}
export type DialogsPageType = {
    messages: Array<MessagesType>;
    dialogs: Array<DialogsType>
}
export type ProfilePageType = {
    posts: Array<PostsType>
}
export type StateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
}