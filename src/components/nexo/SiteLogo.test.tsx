import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteLogo } from "./SiteLogo";

describe("SiteLogo", () => {
  it("shows a local logo when the hosted image fails to load", () => {
    render(<SiteLogo className="h-7 w-auto" />);

    fireEvent.error(screen.getByRole("img", { name: "Nexo" }));

    expect(screen.getByRole("img", { name: "Nexo" }).tagName.toLowerCase()).toBe("svg");
  });
});
