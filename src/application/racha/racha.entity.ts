export class RachaEntity {
  id: string;
  name: string;
  estabelishmentId: string;
  responsibleId: string;
  dateTime: Date;
  status: RachaStatusEnum;
  public: boolean;
  createdAt: Date;
  updatedAt: Date;
}

enum RachaStatusEnum {
  CONFIRMED,
  CANCELED,
  OPENED,
}
