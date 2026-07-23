export interface Sponsor {
  name: string;
  url?: string;
  logo?: string;
}

export interface SponsorTierData {
  id: 'title' | 'gold' | 'silver' | 'bronze' | 'inkind';
  sponsors: Sponsor[];
}

// No sponsors on file yet — tiers render an on-brand empty state until real
// sponsor data is supplied.
export const sponsorTiers: SponsorTierData[] = [
  { id: 'title', sponsors: [] },
  { id: 'gold', sponsors: [] },
  { id: 'silver', sponsors: [] },
  { id: 'bronze', sponsors: [] },
  { id: 'inkind', sponsors: [] },
];
