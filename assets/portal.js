function printReviewPage() {
  window.print();
}

function clearReviewForm() {
  const form = document.querySelector(".review-form");
  if (form) {
    form.reset();
  }
}
