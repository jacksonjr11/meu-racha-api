interface Participant {
  id: string;
  name: string;
}

export interface RachaOutput {
  schedule: {
    estableshment: {
      id: string;
      description: string;
      address: {
        street: string;
        number: string;
        zipcode: string;
      };
    };
  };
  participants: Participant[];
}
