import {
  Equal,
  Expect,
} from "../../../helper";

type Route =
  | {
  route: "/";
  search: {
    page: string;
    perPage: string;
  };
}
  | { route: "/about"; search: {} }
  | { route: "/admin"; search: {} }
  | { route: "/admin/users"; search: {} };

// type test = {
//   [R in Route]: R["search"];
// }

/**
 *  해법은 as
 *  여기서 in을 통해서 루프를 돌고 있음.
 *  하지만 as를 써서 다시 remapping을 한다고 생각하면 됨
 */
type RoutesObject = {
  [R in Route as R["route"]]: R["search"];
};

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": {
          page: string;
          perPage: string;
        };
        "/about": {};
        "/admin": {};
        "/admin/users": {};
      }
    >
  >,
];
