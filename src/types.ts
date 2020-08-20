/* Type definitions */
import { FunctionComponent } from "react";

export type AppRoute = {
    name?: string
    path: string
    component: FunctionComponent
}

export interface State {
    redirect?: boolean
}

export interface NavbarProps {
    handleClick: any
}
