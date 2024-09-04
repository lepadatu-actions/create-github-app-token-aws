process.env.GITHUB_REPOSITORY_OWNER= "lepadatu-actions";
process.env.GITHUB_REPOSITORY = "lepadatu-actions/create-github-app-token";

// Verify `main` exits with an error when neither the `app-id` nor `app_id` input is set.
try {
  await import("../main.js");
} catch (error) {
  console.error(error.message);
}
