type TState = {
    name: string;
    capital: string;
}
interface IState {
    name: string;
    capital: string;
}

const wyoming: TState = {
    name: 'Wyoming',
    capital: 'Cheyenne',
    population: 500_000
// ~~~~~~~~~~~~~~~~~~ 형식은 'TState' 형식에 할당할 수 없음
//                    객체 리터럴은 알려진 속성만 지정할 수 있으며
//                    'TState' 형식에 'population' 이 없음
};