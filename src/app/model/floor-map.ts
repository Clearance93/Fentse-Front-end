export class FloorMap {
    _id: any;
    floorNumber: number = 0;
    floor_image: string = "";
    coordinates: {
        latitute: 0;
        longitute: 0;
        name: "";
        edge: {
            to: "";
            from: "";
        }[]
    }[] = [];
    shops: {
        shop_name: string;
        distance: number;
        shop_image: string;
        from: string;
        to: string;
    }[] = [];
}
