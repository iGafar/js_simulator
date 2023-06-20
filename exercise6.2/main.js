function redditName(link) {
  link = link.replace("https://www.reddit.com/r/", "").split('');
  link.splice(link.indexOf("/"));
  console.log(link.join(""));
}

redditName(
  "https://www.reddit.com/r/mildlyinfuriating/comments/14dti04/diablo_iv_was_released_and_my_partner_has/"
);
