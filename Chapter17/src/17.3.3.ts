interface UserProfile {
    id: string;
    name: string;
    address: string;
}

type User1 = Omit<UserProfile, "address">;
type User2 = Pick<UserProfile, "id" | "name">;

