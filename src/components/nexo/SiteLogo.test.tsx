import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteLogo } from "./SiteLogo";

describe("SiteLogo", () => {
  it("renders the supplied local logo", () => {
    render(<SiteLogo className="h-7 w-auto" />);

    expect(screen.getByRole("img", { name: "Nexo" }).tagName.toLowerCase()).toBe("img");
  });
});
