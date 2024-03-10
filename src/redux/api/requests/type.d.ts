/* eslint-disable @typescript-eslint/no-unused-vars */
export namespace CRUD {
  type GetDataRequests = void;

  type GetDataResponse = {
    _id: number;
    name: string;
    img: string;
  }[];

  type PostRequests = {
    name: string;
    img: string;
  };

  type PostResponse = {
    _id: number;
    name: string;
    img: string;
  }[];

  type putRequests = {
    _id: number;
    newData: {
      name: string;
      img: string;
    };
  };

  type PutResponse = {
    _id: number;
    name: string;
    img: string;
  }[];
}
