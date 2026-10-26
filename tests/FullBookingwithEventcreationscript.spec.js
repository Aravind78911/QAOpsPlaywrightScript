import { test, expect } from '@playwright/test'

test('Event script', async ({ page }) => {
  test.setTimeout(60000);
  page.on('request', request => console.log(request.url()));
  page.on('response', response => console.log(response.url(), response.status()));
  await page.goto("https://eventhub.rahulshettyacademy.com/login");
  /*await page.locator(".text-indigo-600").click();
  await page.getByPlaceholder("you@email.com").fill("aravind@gmail.com");
  await page.getByPlaceholder("Min 8 chars, uppercase, number & symbol").fill("Welcome@123");
  await page.getByPlaceholder("Repeat your password").fill("Welcome@123");
  await page.getByRole('button',{name: 'Create Account'}).click();*/
  await page.getByPlaceholder("you@email.com").fill("aravind@gmail.com");
  await page.getByLabel("Password").fill("Welcome@123");
  await page.locator("#login-btn").click();
  /*await page.getByText('link',{name: 'Browse Events'}).click().isVisible;*/
  await page.locator("#nav-events").click();
  await page.getByRole('button', { name: "Add New Event" }).click();
  await page.locator("#event-title-input").fill("Samvaad Event");
  await page.getByPlaceholder("Describe the event…").fill("Samvaad Description");
  await page.locator("#category").selectOption("Concert");
  await page.getByLabel("City").fill("Hyderabad");
  await page.getByLabel("Venue").fill("Hyderabad,Suchithra,Jeedimetla Village");
  await page.getByLabel("Event Date & Time").fill("2026-10-01T14:40");
  await page.getByLabel("Price ($)").fill("100");
  await page.getByLabel("Total Seats").fill("50");
  await page.locator("#add-event-btn").click();
  await page.getByText("Event is created Successfully..").isVisible();
  /*const eventcards = page.locator('[data-testid="event-card"]');
  await expect(eventcards.first()).toBeVisible();
  const eventCard = eventcards.filter({
    hasText: "Samvaad Event"
  });
  await expect(eventCard).toBeVisible({ timeout: 5000 });
  const seatText = await eventCard.locator('text=/seat/i').innerText();
  const seatsBeforeBooking = parseInt(seatText.match(/\d+/)[0], 10);*/
  await page.locator("#nav-events").click();
  await page.getByText("Samvaad Event").click();
  const eventTitle = "Samvaad Event";
  const eventCard = page.locator('[data-testid="event-card"]').filter({
    hasText: eventTitle
  });
  await expect(page.locator('#ticket-count')).toHaveText('1', { useInnerText: true });
  await page.getByLabel("Full Name").fill("amit");
  await page.locator("#customer-email").fill("amit@gmail.com");
  await page.getByPlaceholder("+91 98765 43210").fill("9876535225");
  await page.locator(".confirm-booking-btn").click();
  const bookingRefElement = page.locator('.booking-ref').first();
  await expect(bookingRefElement).toBeVisible();
  const bookingRef = (await bookingRefElement.innerText()).trim();
  await page.getByRole('link', { name: 'View My Bookings' }).click();
  await expect(page).toHaveURL(/\/bookings$/);
  const bookingCards = page.locator('#booking-card');
  await expect(bookingCards.first()).toBeVisible();
  const matchedCard = bookingCards.filter({
    has: page.locator('.booking-ref'),
    hasText: bookingRef
  });
  await expect(matchedCard).toBeVisible({ timeout: 5000 });
  await expect(matchedCard).toContainText(eventTitle);
  await page.locator("#nav-events").click();
  const bookingcards = page.locator('[data-testid="event-card"]');
  const cards = page.locator('[data-testid="event-card"]');
  await expect(cards.first()).toBeVisible();
  await expect(eventCard).toBeVisible({ timeout: 5000 });
  const seatText = await eventCard.locator('text=/seat/i').innerText();
  const seatsAfterBooking = parseInt(seatText.match(/\d+/)[0], 10);
  const seatTextBefore = await eventCard.locator('text=/seat/i').innerText();
  const seatsBeforeBooking = parseInt(seatTextBefore.match(/\d+/)[0], 10);
  await page.locator("#nav-bookings").click();
  await page.locator("#cancel-booking-btn").nth(0).click();
  await page.locator("#confirm-dialog-yes").click();
  await page.getByRole('button', { name: 'Admin' }).click();
  await page.getByRole('link', { name: 'Manage Bookings' }).click();
  const spanElement = page.locator('span', { hasText: 'S-03AND6' });
  /*await page.getByRole('button',{name: 'View'}).first().click();
  await page.locator(".w-5.h-5").first().click();*/
  await page.getByRole('button', { name: 'Cancel' }).first().click();
  await page.locator("#confirm-dialog-yes").click();
  await page.locator("#logout-btn").click();
});
