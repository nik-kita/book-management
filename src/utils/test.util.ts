import { randomUUID } from "node:crypto";

export const TestUtil = {
  delay,
  uuid: () => randomUUID(),
};

/**
 * @description
 * Imitation of the async operation
 */
async function delay(ms?: number): Promise<void> {
  await new Promise((resolve) =>
    setTimeout(
      resolve,
      ms ?? Math.round(Math.random() * 100),
    )
  );
}
