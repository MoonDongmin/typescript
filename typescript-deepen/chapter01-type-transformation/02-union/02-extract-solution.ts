import {
  Equal,
  Expect,
} from "../../helper";

export type Event =
  | {
  type: "click";
  event: MouseEvent;
}
  | {
  type: "focus";
  event: FocusEvent;
}
  | {
  type: "keydown";
  event: KeyboardEvent;
};

// 뽑아 오는 것
type ClickEvent = Extract<Event, { event: MouseEvent }>;

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];
