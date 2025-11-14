import {createRootRoute} from "@tanstack/react-router";
import Root from "../components/Root.tsx";

const root = createRootRoute({
    component: Root
})

export { root as Route };