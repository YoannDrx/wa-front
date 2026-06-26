import { expect, test } from "@playwright/test";

const publicPages = [
  "/",
  "/qui-sommes-nous",
  "/team/partenaires",
  "/expertise",
  "/carriere",
  "/contact",
  "/mentions-legales",
  "/team/bruno-weil",
  "/team/mathilde-houet-weil",
  "/team/eric-weil",
];

const acceptCookieBanner = async (page) => {
  await page.context().addCookies([
    {
      name: "CookieConsent",
      value: "accepted",
      domain: "127.0.0.1",
      path: "/",
    },
  ]);
};

test.describe("responsive layout", () => {
  for (const viewport of [
    { name: "mobile", width: 390, height: 844 },
    { name: "tablet", width: 768, height: 1024 },
    { name: "desktop", width: 1280, height: 900 },
  ]) {
    test(`has no horizontal overflow on ${viewport.name}`, async ({ page }) => {
      await acceptCookieBanner(page);
      await page.setViewportSize({ width: viewport.width, height: viewport.height });

      for (const path of publicPages) {
        await page.goto(path);
        await page.waitForLoadState("networkidle");

        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        expect(overflow, `${path} overflows by ${overflow}px on ${viewport.name}`).toBeLessThanOrEqual(1);
      }
    });
  }
});

test.describe("mobile navigation", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("opens fullscreen, closes with escape, then navigates and closes on item click", async ({ page }) => {
    await acceptCookieBanner(page);
    await page.goto("/");

    const menuButton = page.getByRole("button", { name: "Ouvrir le menu" });
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    const mobileNavigation = page.getByRole("navigation", { name: "Navigation mobile" });
    await expect(mobileNavigation).toBeVisible();

    const overlayWidth = await page.locator("#mobile-navigation").evaluate((element) => element.getBoundingClientRect().width);
    expect(overlayWidth).toBeGreaterThanOrEqual(390);

    await page.keyboard.press("Escape");
    await expect(mobileNavigation).toBeHidden();

    await menuButton.click();
    await mobileNavigation.getByRole("link", { name: "Contact", exact: true }).click();
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.locator("#mobile-navigation")).toBeHidden();
  });
});
