import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface simplifiedProduct{
  images: any;
  hoverImageUrl: string | StaticImport;
    _id:string;
imageUrl:string;
price:number;
slug:string;
categoryName:string;
name:string;

}