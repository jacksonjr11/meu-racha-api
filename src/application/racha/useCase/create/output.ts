export interface CreateRachaOutput {
  id: string;
  name: string;
  estabelishmentId: string;
  responsibleId: string;
  dateTime: Date;
  details: Details;
  participants: Participant[];
}

interface Details {}

interface Participant {}
