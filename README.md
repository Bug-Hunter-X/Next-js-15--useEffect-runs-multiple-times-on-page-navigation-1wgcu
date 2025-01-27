# Next.js 15 useEffect Hook Issue

This repository demonstrates an uncommon bug in Next.js 15 related to the `useEffect` hook's behavior during client-side navigation between pages.

## Problem Description

The `useEffect` hook in the `About` page's component is designed to update a counter every second. However, when navigating to the `/about` page from the `/` page, the `useEffect` hook runs multiple times, leading to unexpected behavior.  This isn't just on initial mount; the effect fires repeatedly with each navigation.

## Solution

The solution involves using the `useRouter` hook to detect route changes and conditionally execute the effect. By checking whether the route is the expected one and only then running the interval, we avoid the issue of the effect executing multiple times.  Further, we ensure the effect cleans up correctly, preventing memory leaks.

## Reproduction Steps

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `npm run dev` to start the development server.
5. Navigate between the `/` and `/about` pages. Observe the counter's behavior.
