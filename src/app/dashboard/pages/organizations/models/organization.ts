export interface Organization {
    id: number;
    title: string;
    logoSrc: string;
    tracking: Stats,
	protection: Stats
}

interface Stats {
	inUse: number,
	assigned: number
}