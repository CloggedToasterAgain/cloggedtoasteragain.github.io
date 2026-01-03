// tests/dateCalculator.test.js
const { addCalendarDays, addBusinessDays } = require("../js/main.js");

//
// ─────────────────────────────────────────────
//  CALENDAR DAY TESTS
// ─────────────────────────────────────────────
//
describe("addCalendarDays", () => {
  test("adds calendar days correctly", () => {
    const start = new Date(2025, 0, 1);
    const result = addCalendarDays(start, 5);
    expect(result.toDateString()).toBe("Mon Jan 06 2025");
  });

  test("adding zero calendar days returns the same date", () => {
    const start = new Date(2025, 0, 10);
    const result = addCalendarDays(start, 0);
    expect(result.toDateString()).toBe("Fri Jan 10 2025");
  });

  test("adding calendar days across year boundary", () => {
    const start = new Date(2025, 11, 31);
    const result = addCalendarDays(start, 1);
    expect(result.toDateString()).toBe("Thu Jan 01 2026");
  });

  test("calendar days handles negative values", () => {
    const start = new Date(2025, 0, 10);
    const result = addCalendarDays(start, -5);
    expect(result.toDateString()).toBe("Sun Jan 05 2025");
  });
});

//
// ─────────────────────────────────────────────
//  BUSINESS DAY TESTS
// ─────────────────────────────────────────────
//
describe("addBusinessDays", () => {
  test("skips weekends for business days", () => {
    const start = new Date(2025, 0, 3); // Friday
    const result = addBusinessDays(start, 1);
    expect(result.toDateString()).toBe("Mon Jan 06 2025");
  });

  test("handles multiple weekends correctly", () => {
    const start = new Date(2025, 0, 1); // Wednesday
    const result = addBusinessDays(start, 10);
    expect(result.toDateString()).toBe("Wed Jan 15 2025");
  });

  test("does not count the start date as a business day", () => {
    const start = new Date(2025, 0, 6); // Monday
    const result = addBusinessDays(start, 1);
    expect(result.toDateString()).toBe("Tue Jan 07 2025");
  });

  test("rolls over into the next month", () => {
    const start = new Date(2025, 0, 30); // Thursday
    const result = addBusinessDays(start, 3);
    expect(result.toDateString()).toBe("Tue Feb 04 2025");
  });

  test("does not mutate the original date", () => {
    const start = new Date(2025, 0, 10);
    addBusinessDays(start, 5);
    expect(start.toDateString()).toBe("Fri Jan 10 2025");
  });

  //
  // ── EDGE CASES ─────────────────────────────
  //
  test("adding zero business days returns the same date", () => {
    const start = new Date(2025, 0, 10);
    const result = addBusinessDays(start, 0);
    expect(result.toDateString()).toBe("Fri Jan 10 2025");
  });

  test("business days handles negative values (backwards)", () => {
    const start = new Date(2025, 0, 13); // Monday
    const result = addBusinessDays(start, -1);
    expect(result.toDateString()).toBe("Fri Jan 10 2025");
  });

  test("business days starting on a weekend moves forward correctly", () => {
    const start = new Date(2025, 0, 4); // Saturday
    const result = addBusinessDays(start, 1);
    expect(result.toDateString()).toBe("Mon Jan 06 2025");
  });

  test("business days handles long ranges", () => {
    const start = new Date(2025, 7, 14); // Aug 14, 2025
    const result = addBusinessDays(start, 67);
    expect(result.toDateString()).toBe("Mon Nov 17 2025");
  });

  test("business days handles month rollover correctly", () => {
    const start = new Date(2025, 1, 27); // Feb 27, 2025
    const result = addBusinessDays(start, 3);
    expect(result.toDateString()).toBe("Tue Mar 04 2025");
  });

  test("business days handles year rollover correctly", () => {
    const start = new Date(2025, 11, 30); // Dec 30, 2025
    const result = addBusinessDays(start, 3);
    expect(result.toDateString()).toBe("Fri Jan 02 2026");
  });

  test("business days does not mutate the original date (long range)", () => {
    const start = new Date(2025, 0, 10);
    addBusinessDays(start, 10);
    expect(start.toDateString()).toBe("Fri Jan 10 2025");
  });
});