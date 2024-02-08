/**
 * 엔터티 객채 1개 생성
 * 엔터티에 대한 맴버 객체 1개 생성
 * 회원 엔터티 생성
 * 회원 오브젝트 생성
 * 회원 가입할 때 사용하는 데이터 구조 = 회원 정보 전부 create
 * 회원 로그인할 때 사용되는 데이터 구조 = 아이디, 비밀번호 login
 * 회원 수정할 때 사용되는 데이터 구조 = 수정할 내용 받기 (단, 로그인한 상태) modify
 * 회원 정보 = DTO??
 * - 아이디 / id
 * - 성명 / realName
 * - 비밀번호 / password
 * - 이메일 / email
 * - 전화 번호 / phoneNumber
 * - 깃랩 아이디 / username
 * - WiSoft 멤버여부 / wiSoftMember
 * - 직책 / position  ex) 학부생, 석사과정, 박사과정, 박사님, 교수님, 졸업생
 *
 */

// interface MemberEntity  {
//     id: LoginId;
//     password: string;
//     realName: KoreanName;
//     email: string;
//     phoneNumber: string;
//     username: GitLabId;
//     position: string;
//     isWiSoftMember: boolean;
// }

class MemberEntity {
    id: LoginId;
    password: string;
    realName: KoreanName;
    email: string;
    phoneNumber: string;
    username: GitLabId;
    position: string;
    isWiSoftMember: boolean;
    constructor(id: LoginId, password: string, realName: KoreanName, email: string, phoneNumber: string, username: GitLabId, position: string, isWiSoftMember: boolean) {
        this.id = id;
        this.password = password;
        this.realName = realName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.username = username;
        this.position = position;
        this.isWiSoftMember = isWiSoftMember;
    }
}

type LoginId = string;
type KoreanName = string;
type GitLabId = string;

type CreateMember = MemberEntity; // 회원 가입
type LoginMember = Pick<MemberEntity, "id" | "password">; // 로그인
type ModifyMember = Partial<Exclude<MemberEntity, "id">>; // 수정

const jinpyo: MemberEntity = {
    id: "jinpyo1234",
    password: "tidkfosd123",
    realName: "안진표",
    email: "wlsvy3312@and.com",
    phoneNumber: "010-1234-1234",
    username: "Jinpyo-Ahn",
    position: "3th-grade",
    isWiSoftMember: true,
};

// orm을 사용하면 **클래스**를 일반적으로 사용
// 메타데이터 관련 데이터를 추가해야함 언제 만들었는지...



