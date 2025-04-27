import { test, expect } from "@playwright/test";
import { FOOTER_LINKS, DRAWER_LINKS, HEADER_LINKS } from "./common";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => localStorage.clear());
  });

  test("should load feed items", async ({ page }) => {
    // Verify feed data loads
    await page.waitForSelector('[data-testid="feed-item"]');
    await expect(page.getByTestId("feed-container")).toBeVisible();
    const feedItemCount = await page.getByTestId("feed-item").count();
    await expect(feedItemCount).toBeGreaterThan(0);
  });

  test("should toggle feed items", async ({ page }) => {
    // Verify initial toggle state
    await expect(page.getByTestId("feed-summary")).toHaveCount(0);
    const subheader = page.locator('[data-testid="subheader"]');
    const subheaderToggle = subheader.getByTestId("feed-toggle");

    // Verify active toggle
    await subheaderToggle.click();
    const activeCount = await page.getByTestId("feed-summary").count();
    await expect(page.getByTestId("feed-summary")).toHaveCount(activeCount);

    // Verify inactive toggle
    await subheaderToggle.click();
    await expect(page.getByTestId("feed-summary")).toHaveCount(0);
  });

  test("should scroll subheader into view", async ({ page }) => {
    // Verify subheader
    await expect(page.getByTestId("subheader")).toBeVisible();

    // Scroll page and verify scroll subheader
    await page.mouse.wheel(0, 500);
    await expect(page.getByTestId("subheader-scroll")).toBeVisible();
  });

  test("should maintain footer navigation", async ({ page }) => {
    const footerLinks = await page.getByTestId("footer-item").all();
    expect(footerLinks.length).toEqual(FOOTER_LINKS.length);

    // Click all footer links
    for (let i = 0; i < footerLinks.length; i++) {
      const link = footerLinks[i];
      const linkConfig = FOOTER_LINKS[i];
      const href = await link.getAttribute("href");

      await expect(link).toHaveText(linkConfig.label);
      expect(href).toEqual(linkConfig.href);
    }
  });

  test("should maintain drawer navigation", async ({ page }) => {
    const drawerLinks = await page.getByTestId("drawer-item").all();
    expect(drawerLinks.length).toEqual(DRAWER_LINKS.length);

    // Click all footer links
    for (let i = 0; i < drawerLinks.length; i++) {
      const link = drawerLinks[i];
      const linkConfig = DRAWER_LINKS[i];
      const href = await link.getAttribute("href");

      await expect(link).toHaveText(linkConfig.label);
      expect(href).toEqual(linkConfig.href);
    }
  });

  test("should maintain header navigation", async ({ page }) => {
    const headerLinks = await page.getByTestId("header-item").all();
    expect(headerLinks.length).toEqual(HEADER_LINKS.length);

    // Click all header links
    for (let i = 0; i < headerLinks.length; i++) {
      const link = headerLinks[i];
      const linkConfig = HEADER_LINKS[i];
      const href = await link.getAttribute("href");

      await expect(link).toHaveText(linkConfig.label);
      expect(href).toEqual(linkConfig.href);
    }
  });
});
