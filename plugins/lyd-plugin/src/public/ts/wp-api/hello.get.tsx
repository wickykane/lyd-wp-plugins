import {
    RouteLocationInterface,
    RouteHttpVerb,
    RouteResponseInterface,
    RouteRequestInterface,
    RouteParamsInterface
} from "@lyd-plugins/utils";

export const locationRestHelloGet: RouteLocationInterface = {
    path: "/hello",
    method: RouteHttpVerb.GET
};

export type RequestRouteHelloGet = RouteRequestInterface;

export type ParamsRouteHelloGet = RouteParamsInterface;

export interface ResponseRouteHelloGet extends RouteResponseInterface {
    hello: string;
}
