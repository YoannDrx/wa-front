import { expect, test } from "@playwright/test";

const publicPages = [
  "/",
  "/qui-sommes-nous",
  "/team/partenaires",
  "/expertise",
  "/carriere",
  "/contact",
  "/news",
  "/mentions-legales",
  "/politique-cookies",
  "/team/bruno-weil",
  "/team/mathilde-houet-weil",
  "/team/eric-weil",
  "/expertise/droit-social/1",
  "/admin",
  "/admin/articles",
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

test.describe("header behavior", () => {
  test("hides on scroll down and reappears on scroll up", async ({ page }) => {
    await acceptCookieBanner(page);
    await page.goto("/");

    const header = page.locator("header").first();
    await expect(header).toBeVisible();

    await page.evaluate(() => window.scrollTo(0, 900));
    await page.waitForTimeout(450);
    const hiddenBox = await header.evaluate((element) => {
      const box = element.getBoundingClientRect();
      return { top: box.top, bottom: box.bottom };
    });
    expect(hiddenBox.bottom).toBeLessThanOrEqual(1);

    await page.evaluate(() => window.scrollTo(0, 200));
    await page.waitForTimeout(450);
    const visibleBox = await header.evaluate((element) => {
      const box = element.getBoundingClientRect();
      return { top: box.top, bottom: box.bottom };
    });
    expect(visibleBox.top).toBeGreaterThanOrEqual(-1);
  });
});

test.describe("articles filters", () => {
  test("uses custom author dropdown and filters by selected author", async ({ page }) => {
    await acceptCookieBanner(page);
    await page.goto("/news");

    await expect(page.locator("select")).toHaveCount(0);

    await page.getByRole("button", { name: /Tous les auteurs/i }).click();
    const listbox = page.getByRole("listbox");
    await expect(listbox).toBeVisible();

    const authorOption = listbox.getByRole("option").nth(1);
    const authorName = (await authorOption.innerText()).trim();
    await authorOption.click();
    await page.getByRole("button", { name: "Filtrer" }).click();

    await expect(page.getByText(authorName).first()).toBeVisible();
  });
});
