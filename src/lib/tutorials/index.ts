import type { Tutorial } from './types';
import { storywrangler } from './storywrangler';
import { dataviz } from './dataviz';

export type { Tutorial } from './types';

// Order here controls the order of the top toggle.
export const tutorials: Tutorial[] = [storywrangler, dataviz];

export const tutorialsBySlug: Record<string, Tutorial> = Object.fromEntries(
	tutorials.map((t) => [t.slug, t])
);
