import UIButton from "./UIButton";

export default {
  title: "UI-kit/UIButton",
  component: UIButton,
};
const Template = (args) => <UIButton {...args} />;

const props = {
  text: "Hello",
  onClick: () => console.log("Button Click"),
  disabled: false,
  theme: "dark",
  classes: "",
};

export const Light = Template.bind({});

Light.args = {
  ...props,
  theme: "light",
};
export const Dark = Template.bind({});

Dark.args = {
  ...props,
  theme: "dark",
};
export const Disabled = Template.bind({});

Disabled.args = {
  ...props,
  disabled: "true",
};
