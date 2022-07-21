import { user } from "./user";

export class SportEvent{
    name?:string;
    place:string
    desc?:string;
    start_date?:string;
    end_date?:string;
    price?:number
    max_num:number
    players:user[]
    id?:string;
    category_name:string
}