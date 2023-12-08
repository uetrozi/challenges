import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  const labelText = "labelText";
  const placeholder = "placeholder";
  const name = "Username";
  const value = "value";
  const onChange = jest.fn();

  render(
    <Input
      labelText={labelText}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={true}
    />
  );
  const label = screen.getByTestId("testlabel");

  expect(label).toBeInTheDocument();

  const input = screen.getByLabelText(/labelText/i);

  expect(input).toBeInTheDocument();

  expect(input).toHaveAttribute("id", "Username");
  expect(input).toHaveAttribute("name", "Username");
  expect(input).toHaveAttribute(placeholder, "placeholder");
  expect(input).toHaveAttribute("type", "text");
  expect(input).toHaveAttribute("value", "value");
  //   expect(input).toHaveAttribute(onChange);
  expect(input).toHaveAttribute("required");
});

test("calls callback on every user input", async () => {
    const labelText = "labelText";
    const placeholder = "placeholder";
    const name = "Username";
    const value = "value";
    const handleChange = jest.fn();
    const user = userEvent.setup();
  
    render(
      <Input
        labelText={labelText}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        required={true}
        />
  );

  const input = screen.getByLabelText(/labelText/i);

  await user.type(input, "abc");
  

  expect(handleChange).toHaveBeenCalledTimes(3);
});
