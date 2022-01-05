beforeAll(async () => {
  await page.goto("http://localhost:20080/");
});

it("トップ画面が表示されること", async () => {
  const element = await page.$eval("main", (el) => el.innerHTML);
  expect(element).toContain("とっぷがめん");
});
