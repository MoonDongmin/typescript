interface State {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
    pageContents: string;
}

// interface TopNavState {
//     userId: string;
//     pageTitle: string;
//     recentFiles: string[];
// }

// type TopNavState = {
//     userId: State['userId'];
//     pageTitle: State['pageTitle'];
//     recentFiles: State['recentFiles'];
// };

// 매핑된 타입

// type TopNavState = {
//     [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k]
// };

// 위의 코드를 고치면 이렇게
type TopNavState = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;