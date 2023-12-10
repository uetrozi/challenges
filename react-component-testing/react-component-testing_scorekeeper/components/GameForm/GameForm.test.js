import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";
import Button from "../Button";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);

  const input1 = screen.getByLabelText("Name of game");
  expect(input1).toBeInTheDocument();

  const input2 = screen.getByLabelText("Player names, separated by comma");
  expect(input2).toBeInTheDocument();

  const button = screen.getByRole("button", { name: "Create game" });
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);

  const form = screen.getByRole("form", { name: "Create a new game" });
  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const onHandleCreateGame = jest.fn();
  const user = userEvent.setup();
  render(<GameForm onCreateGame={onHandleCreateGame} />);

  const input1 = screen.getByLabelText("Name of game");

  const input2 = screen.getByLabelText("Player names, separated by comma");

  const button = screen.getByRole("button", { name: "Create game" });
  const form = screen.getByRole("form", { name: "Create a new game" });

  await user.type(input1, "abc");
  await user.type(input2, "def, ghi");
  await user.click(button);

  expect(onHandleCreateGame).toHaveBeenCalledWith({
    nameOfGame: "abc",
    playerNames: ["def", "ghi"],
  });
});

test("does not submit form if one input field is left empty", async () => {
  const onHandleCreateGame = jest.fn();
  const user = userEvent.setup();
  render(<GameForm onCreateGame={onHandleCreateGame} />);

  const input1 = screen.getByLabelText("Name of game");

  const input2 = screen.getByLabelText("Player names, separated by comma");

  const button = screen.getByRole("button", { name: "Create game" });
  const form = screen.getByRole("form", { name: "Create a new game" });

  await user.type(input1, "abc");

  await user.click(button);

  expect(onHandleCreateGame).not.toHaveBeenCalled();
});
