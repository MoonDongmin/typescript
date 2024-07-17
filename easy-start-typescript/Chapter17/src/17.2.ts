interface UserProfile {
    id: string;
    name: string;
    address: string;
}

type HulkProfile = Pick<UserProfile, "id" | "name">;

let hulk: HulkProfile = {
    id: "1",
    name: "헐크"
};