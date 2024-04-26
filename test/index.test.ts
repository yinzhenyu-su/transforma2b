import { describe, it, expect } from "vitest";
import { transformA2B } from "../src";
import { Equal } from "./util";

describe("suite", () => {
  it("test value and type", () => {
    const a = { a: "test" };
    const { data, transform } = transformA2B(a, (a) => {
      return {
        ...a,
        b: "b test",
      };
    }).transform((b) => {
      return {
        ...b,
        c: "test" as "test",
      };
    });
    expect(data).toMatchInlineSnapshot(`
      {
        "a": "test",
        "b": "b test",
        "c": "test",
      }
    `);
    expect(data).toBeTypeOf("object");

    const d = transform((c) => {
      return {
        ...c,
        check: ["test"] as ["test"],
      };
    }).data;
    expect(d).toMatchInlineSnapshot(`
      {
        "a": "test",
        "b": "b test",
        "c": "test",
        "check": [
          "test",
        ],
      }
    `);

    type D = { a: string; b: string; c: "test"; check: ["test"] };
    type T = Equal<D, typeof d>;
    const t: T = true;
  });
});
