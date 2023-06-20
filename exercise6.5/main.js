function transformUpvotes(arr) {
  console.log(
    arr.map((x) =>
      x.includes("k") ? Number(x.replace("k", "")) * 1000 : Number(x)
    )
  );
}

transformUpvotes(["10k", "2.3k", "5k", "32", "28.4k"]);
