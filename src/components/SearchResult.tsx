import type {JSX} from "react";
import {getRouteApi} from "@tanstack/react-router";

const SearchResult = (): JSX.Element => {
    const results = getRouteApi('/').useLoaderData()
    return <div>{JSON.stringify(results)}</div>
}

export default SearchResult;