import type {PageLoad} from "./$types"
import { authState } from "rxfire/auth";

export const load: PageLoad = ({url}) => {
    return {
        foo:"bar"
    }
}