import {
  Equal,
  Expect,
} from "../../helper";

type Routes = "/users" | "/users/:id" | "/products" | "/products/:id";

// type DynamicRoutes = Exclude<Routes, `/users` | `/products`>;
type DynamicRoutes = Extract<Routes, `${string}/:id`>;


type tests = [Expect<Equal<DynamicRoutes, "/users/:id" | "/products/:id">>];
