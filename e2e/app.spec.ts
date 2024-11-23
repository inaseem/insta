import { test, expect } from '@playwright/test';

test('Home page loads successfully', async ({ page, baseURL }) => {
  await page.goto(baseURL!);
  // Expects page to have a heading with the name of Insta.
  await expect(page).toHaveTitle(/Insta/);
});

test("Clicking on a person's status navigates to the stories page", async ({
  page,
  baseURL,
}) => {
  await page.goto(baseURL!);
  // Click first person's status
  await page.getByRole('button', { name: 'Aarav' }).click();
  // Assert that it takes the user to /stories? page
  await expect(page).toHaveURL(/\/stories/);
});

test("Stories page renders the person's status information", async ({
  page,
  baseURL,
}) => {
  await page.goto(baseURL!);
  // Click first person's status
  await page.getByRole('button', { name: 'Aarav' }).click();
  // Assert that the stories page renders the person's information such as name and handle
  await expect(
    page.getByRole('heading', { name: 'Aarav', exact: true })
  ).toBeVisible();
  await expect(page.getByRole('heading', { name: '@aarav' })).toBeVisible();
  // Assert that an image is visible with the name 'Story'
  await expect(page.getByRole('img', { name: 'Story' })).toBeVisible();
});

test('Clicking close story navigates back to home page', async ({
  page,
  baseURL,
}) => {
  await page.goto(baseURL!);
  // Click first person's status
  await page.getByRole('button', { name: 'Aarav' }).click();
  // Clicking close story takes the user to the home page / again
  await page.getByLabel('Close Story').click();
  await expect(page).toHaveURL(baseURL!);
});

test('Clicking next story button navigates to the next story', async ({
  page,
  baseURL,
}) => {
  await page.goto(baseURL!);
  // Click first person's status
  await page.getByRole('button', { name: 'Aarav' }).click();
  // Store the current Story url from the image tag with name as Story
  const currentStoryUrl = await page.getByRole('img', { name: 'Story' }).getAttribute('src');
  // Click next story button
  await page.getByLabel('Next Story').click();
  // Store the new Story url from the image tag with name as Story
  const nextStoryUrl = await page.getByRole('img', { name: 'Story' }).getAttribute('src');
  // Verify that the image url in both cases is different
  expect(currentStoryUrl).not.toBe(nextStoryUrl);
});

test('Clicking previous story button navigates to the previous story', async ({
  page,
  baseURL,
}) => {
  await page.goto(baseURL!);
  // Click first person's status
  await page.getByRole('button', { name: 'Aarav' }).click();
  // Store the current Story url from the image tag with name as Story
  const currentStoryUrl = await page.getByRole('img', { name: 'Story' }).getAttribute('src');
  // Click next story button to go to the next story first
  await page.getByLabel('Next Story').click();
  // Click previous story button
  await page.getByLabel('Previous Story').click();
  // Store the previous Story url from the image tag with name as Story
  const previousStoryUrl = await page.getByRole('img', { name: 'Story' }).getAttribute('src');
  // Verify that the previous story url matches the initial story url
  expect(previousStoryUrl).toBe(currentStoryUrl);
});
