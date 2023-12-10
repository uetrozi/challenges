import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player name="Susaha" />);
  const buttons = screen.getAllByRole("button");
  const player = screen.getByText(/susaha/i);
  expect(player).toBeInTheDocument();
  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  const handleDecrease = jest.fn();
  const handleIncrease = jest.fn();
  const user = userEvent.setup();

  render(
    <Player
      onDecreasePlayerScore={handleDecrease}
      onIncreasePlayerScore={handleIncrease}
    />
  );
  const decreaseButton = screen.getByRole("button", {
    name: /Decrease Score/i,
  });
  const increaseButton = screen.getByRole("button", {
    name: /Increase Score/i,
  });

  await user.click(increaseButton);
  await user.click(decreaseButton);

  expect(handleDecrease).toHaveBeenCalledTimes(1);
  expect(handleIncrease).toHaveBeenCalledTimes(1);
});
