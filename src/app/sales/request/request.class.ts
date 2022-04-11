import { RequestLine } from "../requestline/requestline.class";
import { User } from "../user/user.class";

export class Request {
    id: number = 0;
    description: string = "";
    justification: string = "";
    rejectionReason!: string;
    deliveryMode: string = "";
    status: string = "NEW";
    total: number = 0;

    userId: number = 0;
    user!: User;

    requestLines!: RequestLine[]


    //edit then create
    //request needs a request id in the url for requestline create
}