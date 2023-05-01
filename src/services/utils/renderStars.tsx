export function renderStars(count: number): string {
  let stars = "";
  for (let i = 0; i < count; i++) {
    stars += "*";
  }

  return stars;
}
