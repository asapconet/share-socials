export const steps = [
  {
    selector: ".step-one",
    content: "Add a link, text or image that you'd like to share",
  },
  {
    selector: ".step-two",
    content:
      "Copy and use shareable link for twitter and other social media .... That's it, easy.",
  },
];

export const styles = {
  popover: (base: any) => ({
    ...base,
    "--reactour-accent": "#ef5a3d",
    borderRadius: 10,
    fontSize: "1rem",
    color: 'black',
    className:'text-xs'
  }),
  maskArea: (base: any) => ({ ...base, rx: 10 }),
};
