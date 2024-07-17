interface Profile {
    id: string;
    address: string;
}

type ProfiledId = Pick<Profile, "id">;

let captProfile: ProfiledId = {
    id: "캡틴 아이디",
};