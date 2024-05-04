window.onbeforeunload = () => {
  for (const form of document.forms) {
    form.reset();
  }
};
