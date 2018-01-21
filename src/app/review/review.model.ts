export class PhoneIndModel {
  name: string;
  image: string;
  description: string;
  createdBy: string;
  createdDate: string;
  rating: string;
  amazonUrl: string;
  amazonPrice: number;
  keyFeature: Array<string>;
  specification: Array<SpecificationModel>;
}

export class SpecificationModel{
  display: string;
  storage: string;
  battery: string;
  internalStorage: string;
  front: string;
  rear: string;
  Resolution: string;
  OS: string;
}

export class PhoneModel {
  reviews: Array<PhoneIndModel>;
}
