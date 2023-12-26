interface ProductDropdown {
    value: string;
    selected: boolean;
}

interface StockDropdown {
    value: number;
    selected: boolean;
}

interface AddressDropdown {
    value: { city: string, zipCode: string };
    selected: boolean;
}

// 위의 코드를 이걸로 간추릴 수 있음
interface Dropdown<T> {
    value: T;
    selected: boolean;
}

// 드롭다운 유형별로 각각의 인터페이스 연결
let product1: ProductDropdown;
let stock1: StockDropdown;
let address1: AddressDropdown;

// 드롭다운 유형별로 하나의 제네릭 인테페이스를 연결
let product2: Dropdown<string>;
let stock2: Dropdown<number>;
let address2: Dropdown<{ city: string; zipCode: string; }>;