export type FormRule = true | string

export function hasPassedRule(e:FormRule) {
  return e.valueOf() === "boolean"
}
