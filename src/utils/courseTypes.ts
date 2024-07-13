import { StaticImageData } from "next/image";

export interface CourseType {
    title: string;
    description: string;
    videoLink: string;
    image: StaticImageData;
    stars: number;
    id: string;
    price: number;
    students: number;
    tag: string;
}