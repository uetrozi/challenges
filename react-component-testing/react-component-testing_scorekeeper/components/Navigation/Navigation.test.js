import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);
  const navigationLinkPlay = screen.getByRole("link", { name: /play/i });
  expect(navigationLinkPlay).toBeInTheDocument();
  const navigationLinkHistory = screen.getByRole("link", { name: /history/i });
  expect(navigationLinkHistory).toBeInTheDocument();
});
