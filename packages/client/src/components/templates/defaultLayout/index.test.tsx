import { render } from "@testing-library/react";
import Component from "./";

test("snapshot", () => {
  const { asFragment } = render(
    <Component>
      <p>content</p>
    </Component>
  );
  expect(asFragment()).toMatchSnapshot();
});
