export interface Sponsor {
  name: string;
  url?: string;
  logo?: string;
}

export interface SponsorTierData {
  id: 'diamond' | 'gold' | 'silver' | 'inkind';
  sponsors: Sponsor[];
}

// No sponsors on file yet — tiers render an on-brand empty state until real
// sponsor data is supplied.
export const sponsorTiers: SponsorTierData[] = [
  { id: 'diamond', sponsors: [] },
  { id: 'gold', sponsors: [] },
  { id: 'silver', sponsors: [] },
  { id: 'inkind', sponsors: [] },
];

// Current sponsors thank-you wall — flat list with logos, shown separately
// from the tier breakdown. Empty until real sponsor logos are supplied.
export const currentSponsors: Sponsor[] = [];
