export const showToast = (actionSuccess, loaderSuccess) => {
  let success;
  if (actionSuccess !== undefined) success = actionSuccess;
  if (loaderSuccess !== undefined) success = loaderSuccess;
  if (success !== undefined) {
    if (success) shopify.toast.show("Changes Saved", { duration: 2000 });
    else
      shopify.toast.show("Something went wrong. Please try again.", {
        duration: 2000,
        isError: true,
      });
  }
};
